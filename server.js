require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");

const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());

app.use(express.static(path.join(__dirname, "build")));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const { getURLs, convertHourly, getRequests } = require("./helpers");

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.post("/api", async (req, res) => {
  if (!req.body.year || !req.body.month || !req.body.lat || !req.body.long) {
    return res.status(400).send({
      message: "Invalid Request"
    });
  }
  if (req.body.year < 1948 || req.body.year > 2038) {
    return res.status(400).send({
      message: "Invalid Year"
    });
  }
  if (req.body.month < 1 || req.body.month > 12) {
    return res.status(400).send({
      message: "Invalid Month"
    });
  }

  var urls = getURLs(
    req.body.month,
    req.body.year,
    req.body.lat,
    req.body.long
  );

  var result = await getRequests(urls);

  var amountsHourly = convertHourly(result, 75, 62);
  if (!amountsHourly) {
    return res.status(400).send({
      message: "Something Went Wrong"
    });
  } else {
    res.send(amountsHourly);
  }
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server running on port ${port}`));

module.exports = app;

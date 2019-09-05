var chai = require("chai");
var chaiHttp = require("chai-http");
var app = require("../server");
var should = chai.should();

chai.use(chaiHttp);

describe("Weather Routes", function() {
  it("should return object on /api/daily", function(done) {
    chai
      .request(app)
      .post("/api/daily")
      .send({
        month: 1,
        year: 2019,
        lat: 42.3601,
        long: -71.0589
      })
      .end(function(err, res) {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.have.property("heatingActivated");
        res.body.should.have.property("coolingActivated");
        done();
      });
  });
  it("should return object on /api/hourly", function(done) {
    chai
      .request(app)
      .post("/api/hourly")
      .send({
        month: 1,
        year: 2019,
        lat: 42.3601,
        long: -71.0589
      })
      .end(function(err, res) {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.have.property("heatingActivated");
        res.body.should.have.property("coolingActivated");
        done();
      });
  });
  it("should return object on /api/daily", function(done) {
    chai
      .request(app)
      .post("/api/daily")
      .send({
        month: 1,
        year: 2019,
        lat: 42.3601,
        long: -71.0589
      })
      .end(function(err, res) {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.have.property("heatingActivated");
        res.body.should.have.property("coolingActivated");
        done();
      });
  });
});

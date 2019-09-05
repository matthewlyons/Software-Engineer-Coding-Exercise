const request = require("request-promise");

// These are helper functions to simplify api calls and simplify testing.

module.exports = {
  // getRequests - GET request of data for array of urls.
  // @param {array} urls - The URLs to be fetched.
  // @return {array} An array of objects for weather.
  async getRequests(urls) {
    try {
      const result = await Promise.all(
        urls.map(url => {
          return request({
            url,
            method: "GET",
            json: true
          });
        })
      );
      return result;
    } catch (e) {
      console.log(e.message);
    }
  },

  // getURLs - Generates array of api links
  // @param {number} month - The Month.
  // @param {number} year - The Year.
  // @param {number} lat - The lat.
  // @param {number} long - The long.
  // @return {array} An array of javascript formatted days for the month.
  getURLs(month, year, lat, long) {
    var arr = [];
    var days = new Date(year, month, 0).getDate();

    for (let i = 0; i < days; i++) {
      // Add padding to day/ month to make double digit int
      var day = i < 9 ? `0${i + 1}` : i + 1;
      var monthIndex = month < 10 ? `0${month}` : month;
      arr.push(
        `https://api.darksky.net/forecast/${process.env.API_KEY}/${lat},${long},${year}-${monthIndex}-${day}T00:00:00?exclude=currently,flags,minutely`
      );
    }

    return arr;
  },

  // convertDaily - Takes an array of weather data objects and converts them to a single object containing number of times temp crossed threshold.
  //                This function uses the daily high/ low temps.
  // @param {array} data - An array of objects containing weather data
  // @param {number} high - A number for the high temp threshold
  // @param {number} low - A number for the low temp threshold
  // @return {object} An object contining number of times temp crossed below or above a given threshold
  convertDaily(data, high, low) {
    var converted = {
      coolingActivated: 0,
      heatingActivated: 0
    };
    try {
      data.forEach(element => {
        if (element.daily.data[0].temperatureMin < low)
          converted.heatingActivated++;
        if (element.daily.data[0].temperatureMax > high)
          converted.coolingActivated++;
      });
    } catch (err) {
      return false;
    }

    return converted;
  },

  // convertDaily - Takes an array of weather data objects and converts them to a single object containing number of times temp crossed threshold.
  //                This function uses the hourly temps and compaires them to the threshold.
  // @param {array} data - An array of objects containing weather data
  // @param {number} high - A number for the high temp threshold
  // @param {number} low - A number for the low temp threshold
  // @return {object} An object contining number of times temp crossed below or above a given threshold
  convertHourly(data, high, low) {
    var converted = {
      coolingActivated: 0,
      heatingActivated: 0
    };
    try {
      data.forEach(element => {
        var cooling = false;
        var heating = false;
        element.hourly.data.forEach(hour => {
          if (hour.temperature < low) heating = true;
          if (hour.temperature > high) cooling = true;
        });
        if (cooling) converted.coolingActivated++;
        if (heating) converted.heatingActivated++;
      });
      return converted;
    } catch (err) {
      return false;
    }
  }
};

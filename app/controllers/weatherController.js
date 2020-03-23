const City = require("../models/city");
const ResponseController = require("../ulits/response.controller");
const request = require('request-promise')

getWeatherReport = async (req, res) => {
  try {
    const cityId = req.params.cityId;
    const cityData = await City.findById(cityId);
    if (cityData) {
      const url = `http://api.openweathermap.org/data/2.5/weather?zip=${cityData.zipcode}&appid=${process.env.WEATHER_API_KEY}`;
      const response = await request(url);
      const weather_response = JSON.parse(response);
      let tempInC = (weather_response.main.temp - 273.15);
      let tempInF = (tempInC * 9/5) + 32;
      const weather_data = {
          cityId,
          city : cityData.city,
          tempInF: Math.round(tempInF),
          tempInC: Math.round(tempInC),
          desc : weather_response.weather[0].description,
          icon : weather_response.weather[0].icon,
      };
      return res.send({
        code: 200,
        message: "weather data",
        data: weather_data,
      });
    } else {
      return res.send({
        code: 400,
        message: "Not Found"
      });
    }
  } catch (error) {
    console.log(error);
    return res.send({
      code: 500,
      message: "Something went Wrong",
      data: []
    });
  }
};


module.exports = {
  getWeatherReport
}
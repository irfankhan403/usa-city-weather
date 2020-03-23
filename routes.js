const express = require("express");
const router = express.Router();

//*********************** Controller ***********************/
const weatherController = require("./app/controllers/weatherController");
const cityController = require("./app/controllers/cityController");


//*********************** Routes ***********************
router.get("/city",cityController.getCity);
router.get("/weather-report/:cityId",weatherController.getWeatherReport);




module.exports = router ;
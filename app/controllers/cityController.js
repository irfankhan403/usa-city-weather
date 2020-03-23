const City = require("../models/city");
const ResponseController = require("../ulits/response.controller");

getCity = async (req, res) => {
  try {
    const q = req.query.q;
    let cities = null;
    if (q) {
      cities = await City.find({
        $or: [
          { 'city': {$regex: q, $options: 'i'} },
          { 'zipcode': {$regex: q, $options: 'i'} }
        ]
      }).limit(20);
    }else{
      cities = await City.find({}).limit(20);
    }
    
    if (cities) {
      return res.send({
        code: 200,
        message: "City data",
        data: cities,
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
    getCity
}
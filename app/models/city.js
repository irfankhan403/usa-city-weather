const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create City Schema
const CitySchema = new Schema({
    city: { type: String },
    loc:[],
    state:{ type: String },
    zipcode:{ type: String }
});

module.exports = City = mongoose.model("City", CitySchema);

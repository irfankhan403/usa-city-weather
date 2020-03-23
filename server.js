require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const fs = require("fs");
var cors = require('cors');
const path = require('path');

const cityModal = require("./app/models/city");
const routes = require("./routes");

// Set up the express app
const app = express();
const port = process.env.PORT || 4000;

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname,'client','build')));

// DB Config
const db = process.env.MONGODB_URI || "mongodb://127.0.0.1/weather";

// Connect to MongoDB
mongoose
  .connect(db, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => {
    console.log("MongoDB Connected");
    mongoose.connection.db
      .listCollections({ name: "cities" })
      .next(function(err, collinfo) {
        if (!collinfo) {
            console.log(`initiating cities data population.`);
            let rawdata = fs.readFileSync("zips.json");
            let cities = JSON.parse(rawdata);
            cityModal.insertMany(cities).then(()=>{
                console.log(`cities data populated.`);
            })
        }
      });
  })
  .catch(err => console.log(err));

app.get("/test", (req, res) => res.send("Hello World!"));

app.use('/api',routes);

app.get('/',(req,res)=>{
  // res.send("work")
  res.sendFile(path.join(__dirname,'client','build','index.html'));
});



app.listen(port, () => console.log(` app listening on port ${port}!`));

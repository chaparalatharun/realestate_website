const mongoose = require("mongoose");

const credsSchema = mongoose.Schema({
    username    : String,
    password    : String,
    first_name  : String,
    last_name   : String,
    age         : Number,
    email       : String,
    address     : String,
    city        : String,
    zip         : Number,
});

const credsModel = mongoose.model("credentials", credsSchema);

module.exports = credsModel;
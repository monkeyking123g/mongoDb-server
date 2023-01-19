const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TimeMonth = new Schema({
    month: String,
    total : Number,
    dateCreated : Date,
    owner : {type : Schema.Types.ObjectId, ref: "User"}
  });
  
  module.exports = mongoose.model("TimeMonth" , TimeMonth);
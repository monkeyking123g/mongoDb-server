const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TimeDay = new Schema({
    company: String,
    start : String,
    end : String,
    total : Number,
    dateCreated : Date,
    owner : {type : Schema.Types.ObjectId, ref: "User"}
    
  });
  
  module.exports = mongoose.model("TimeDay", TimeDay);
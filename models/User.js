const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema({
    email: String,
    password: String,
    image_url: String,
    earning_hour: Number,
    // time_day : [{type : Schema.Types.ObjectId, ref: "TimeDay"}],
    //  time_month : [{type : Schema.Types.ObjectId, ref: "TimeMonth"}],
    createdAt: {
      type: Date,
      default: Date.now,
    },
  });
  
  module.exports = mongoose.model("User", User);
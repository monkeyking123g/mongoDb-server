const User = require("../models/User");
const TimeDay = require("../models/TimeDay")
const TimeMonth = require("../models/TimeMonth")


exports.getUserTimeDay = async (owner_id) =>{
    return await TimeDay.find({owner : owner_id}).populate("owner")
}
exports.getUserTimeMonth = async (owner_id) => {
  return await TimeMonth.find({owner : owner_id}).populate("owner");
};

// create Api 
exports.createTimeDay = async (time) =>{
    return await TimeDay.create(time);
}
exports.createTimeMonth = async (time) =>{
  return await TimeMonth.create(time);
}
// delete Api 
exports.deleteTimeDay = async (id) => {
  return await TimeDay.findByIdAndDelete(id);
};
exports.deleteTimeMonth = async (id) => {
  return await TimeMonth.findByIdAndDelete(id);
};

// User
exports.getUser = async () => {
  return await User.find();
};
 
exports.createUser = async (blog) => {
  return await User.create(blog);
};
 
exports.deleteUser = async (id) => {
  return await User.findByIdAndDelete(id);
};
const express = require("express");
const {getUser, createUser, deleteUser, createImage} = require("../controllers/controllersUser");
const {getUserTimeMonth, getUserTime, createTimeDay, createTimeMonth, deleteTimeDay, deleteTimeMonth} = require("../controllers/TimeDayControllers");
const upload = require('../controllers/uploadMiddleware');
 
const router = express.Router();

 // User
router.route("/images").get(createImage)
router.route("/").get(getUser)
router.post("/", upload.single('image'), createUser);
router.route("/:id").delete(deleteUser);
// Day
router.route("/times").post(createTimeDay)
router.route("/:id/time").get(getUserTime).delete(deleteTimeDay)
// Month
router.route("/month").post(createTimeMonth)
router.route("/:id/month").get(getUserTimeMonth).delete(deleteTimeMonth)
 
module.exports = router;

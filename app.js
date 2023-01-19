const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const cors = require("cors")

//middleware
app.use(cors())
app.use(express.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('public'));
// app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  try {
  res.status(200).json({state : "Server run succesfully"});
  } catch (err) {
    res.status.json({state : "Server problem !"})
  }
});

//configure mongoose
mongoose.connect(
  process.env.MONGODB_URI || "mongodb+srv://dima:1111@cluster0.itcupfx.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Connected to MongoDB");
    }
  }
);
const blogRouter = require("./routes/UserRoutes");
app.use("/api/user", blogRouter);
 
app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
 
module.exports = app;
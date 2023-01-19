const userService = require("../services/servicesUser");
const Resize = require('../Resize');
const path = require("path")

exports.getUser = async (req, res) => {
  try {
    
    const blogs = await userService.getUser();
    res.json({ data: blogs, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.createUser = async (req, res) => {
  try {
    const imagePath = path.join(__dirname, '../public/images');
    const fileUpload = new Resize(imagePath);
    if (!req.file) {
      res.status(401).json({error: 'Please provide an image'});
    }
    const filename = await fileUpload.save(req.file.buffer);
    req.body.image_url = filename

    const blog = await userService.createUser(req.body);
    return res.status(200).json({ data: blog, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.deleteUser = async (req, res) => {
  try {
    const blog = await userService.deleteUser(req.params.id);
    res.json({ data: blog, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.createImage = async (req, res) => {
  try {
    res.render("public");
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


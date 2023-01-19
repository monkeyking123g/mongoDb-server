const blogService = require("../services/servicesUser");

exports.getUserTime = async (req, res) => {
    try {
        const blogs = await blogService.getUserTimeDay(req.params.id);
        res.json({ data: blogs, status: "success" });
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
    };

exports.getUserTimeMonth = async (req, res) => {
        try {
            const blogs = await blogService.getUserTimeMonth(req.params.id);
            res.json({ data: blogs, status: "success" });
          } catch (err) {
            res.status(500).json({ error: err.message });
          }
        };

exports.createTimeDay = async (req, res) => {
    try {
      const blog = await blogService.createTimeDay(req.body);
      res.json({ data: blog, status: "success" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
};

exports.createTimeMonth = async (req, res) => {
    try {
      const blog = await blogService.createTimeMonth(req.body);
      res.json({ data: blog, status: "success" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
};

exports.deleteTimeDay = async (req, res) => {
    try {
      const blog = await blogService.deleteTimeDay(req.params.id);
      res.json({ data: blog, status: "success" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

exports.deleteTimeMonth = async (req, res) => {
    try {
      const blog = await blogService.deleteTimeMonth(req.params.id);
      res.json({ data: blog, status: "success" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
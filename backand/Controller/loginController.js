const Student = require('../models/studentModel');

const registerStudent = async (req, res) => {
  try {
    const obj = {
      username: req.body.username,
      password: req.body.password,
    };

    const result = await Student.create(obj);

    res.json({
      status: "success",
      data: result,
    });
  } catch (error) {
    console.error("Error inserting student:", error);
    res.status(500).json({ status: "failed", error: error.message });
  }
};

module.exports = { registerStudent };

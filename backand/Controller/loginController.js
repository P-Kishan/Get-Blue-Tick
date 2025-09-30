const datamodel = require('../Models/LoginModel');

let login = async (req, res) => {
  try {
    let { username, password } = req.body;
    let studentCollection = new datamodel({ username, password });
    await studentCollection.save();
    res.json({ status: "success", message: "Data Received" });
  } catch (err) {
    console.error(err); // This will show the exact error in the terminal
    res.status(500).json({ status: "error", message: err.message });
  }
}


  
module.exports = { login };
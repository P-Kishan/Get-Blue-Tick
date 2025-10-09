const mongoose = require('mongoose');

const dbConnection = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://paradava_kishan:Kishan2006@userlogin.n0eniko.mongodb.net/userlogin",
      { useNewUrlParser: true, useUnifiedTopology: true }
    );
    console.log("✅ Database Connected Successfully");
  } catch (error) {
    console.error("❌ Database Connection Failed:", error.message);
  }
};

module.exports = dbConnection;

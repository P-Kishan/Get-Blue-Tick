let mongoose = require('mongoose'); 

let LoginSchema = new mongoose.Schema({
    username: { type: String, unique: true },
    password: { type: String,}
});

module.exports = mongoose.models.Student || mongoose.model('Student', LoginSchema);


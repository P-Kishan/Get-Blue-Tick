let express = require('express');
let router = express.Router();
let { registerStudent } = require('../Controller/loginController');

router.post('/register', registerStudent);

module.exports = router;
    
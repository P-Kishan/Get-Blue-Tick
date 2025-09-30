let express = require('express');
let router = express.Router();
const { login } = require('../Controller/loginController');

router.post('/register', login);

module.exports = router;
require('dotenv').config();

let pass = function (req, res, next) {
  if (req.query.pass === process.env.mypass) {
    next();
  } else {
    res.status(403).send({
      message: 'Enter valid password'
    });
  }
};

let checkToken = function (req, res, next) {
  if (req.query.token === process.env.mytoken) {
    next();
  } else {
    res.status(403).send({
      message: 'Forbidden'
    });
  }
};



module.exports = { checkToken, pass };
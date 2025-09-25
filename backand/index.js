let express = require('express');   
const cors = require("cors");
const {checkToken} = require('./Middleware');
const {pass} = require('./Middleware');   
const dbConnection = require('./dbConnection');

const app = express();
app.use(express.json());
app.use(cors()); 

/* app.use(checkToken);
app.use(pass); */

app.get('/', (req, res) => {
  res.send('Hello World');
})

app.post('/register', async (req, res) => {
  let mydb=await dbConnection();
  let studentCollection = mydb.collection('students');
  let obj = {
    username: req.body.username,
    password: req.body.password
  }
  let result = await studentCollection.insertOne(obj);

  let regobj = {
    status: "success",
    data: result
  }
  res.json(regobj);
  
})


app.listen("8000")
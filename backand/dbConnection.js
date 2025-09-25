const {MongoClient} = require('mongodb');
let url = "mongodb://localhost:27017"
const client = new MongoClient(url);

let dbConnection = async function(){
    await client.connect();
    let db = client.db('TestDB')
    return db;
}

module.exports = dbConnection;





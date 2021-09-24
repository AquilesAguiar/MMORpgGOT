let mongodb = require('mongodb').MongoClient
const assert = require('assert')

var connMongoDb = ()=>{
    const url = 'mongodb://localhost:27017'
    const dbName = 'got'
    var conn = mongodb.connect(url, function(err, client) {
        assert.equal(null, err);
        console.log("Connected successfully to server");
       
        const db = client.db(dbName);
       
        client.close();
    }); 
    return conn
}

module.exports = ()=>{
    return connMongoDb
}
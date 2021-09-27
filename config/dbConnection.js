const { MongoClient } = require("mongodb");

const uri = 'mongodb://localhost:27017'
const client = new MongoClient(uri);
async function conn(){
    await client.connect();
    return client.db("got").createCollection("souvenirs", {
        collation: { locale: "fr_CA" },
      });
}
module.exports = function(){
   return conn
}
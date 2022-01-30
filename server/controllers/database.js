var MongoClient = require('mongodb').MongoClient;

// Singleton for database connection
var DbConnection = function () {
    var db = null;

    async function Init() {
        try {
            var url = 'mongodb://localhost:27017/';
            let client= await MongoClient.connect(url);
            let _db = client.db('visitors');
            console.log('Database connected');

            return _db
        } catch (err) {
            console.log('failed to init in database.js');
            console.log(err);
        }
    }

   async function Get() {
        try {

            if (db != null) {
                return db;
            } else {
                console.log('getting new db connection');
                db = await Init();
                return db; 
            }
        } catch (err) {
            console.log('failed to get db instance in database.js');
            console.log(err);
        }
    }

    return {
        Get: Get
    }
}


module.exports = DbConnection(); 


var MongoClient = require('mongodb').MongoClient;
var DbConnection = require('./database');

/* Custom class for visit information */
class Visit {
    constructor(ip, org = "N/A"){
        this.ip = ip;
        this.org = org;
        this.date = new Date().toLocaleString("en-US", {timeZone: "America/Chicago"})
        
    }
}

/* 3rd party API call to get clients IP information*/
function getCompanyName(ip) {
    var result = '';

    // console.log('atempting to call: http://ip-api.com/json/' + ip);
    // http.get('http://ip-api.com/json/208.73.132.195', (resp) => {
    
    http.get(('http://ip-api.com/json/' + ip), (resp) => {

    let data = '';
    
    // A chunk of data has been received.
    resp.on('data', (chunk) => {
        data += chunk;
    });
    
    // The whole response has been received. Print out the result.
    resp.on('end', () => {
        // console.log('response ' + JSON.parse(data).org);
        //this.result = JSON.parse(data).org;
        //console.log('result ' + result);
        return(JSON.parse(data));
    });
    
    }).on("error", (err) => {
    console.log("Error: " + err.message);
    });
    

}

/* Returns clients IP */
function getClientAddress(req) {
    return req.ip.split(":").pop();
};


/******
 MongoDB 
*******/

/* Return all visitor information from the database */
async function getAllHistory(){

        let db = await DbConnection.Get();
        return new Promise(function(resolve, reject) {
            db.collection("visitors").find().toArray( function(err, docs) {
             if (err) {
               // Reject the Promise with an error
               console.log("Failed to get all database history\n" + err);
               return reject(err)
             }
       
             // Resolve (or fulfill) the promise with data
             return resolve(docs)
           })
         })
       }


/* Returns the visitors organization if it is in the MongoDB already*/
/* Prevents the need to always call the outside IP API call for each visitor*/
async function findIP(ip){
    try{
        let db = await DbConnection.Get();
        var query = {IP: ip};
        db.collection("visitors").findOne(query), function(err, visitor) {
            return visitor.org;
        };
    }
    catch(err){
        console.log("Could not search database for an IP.\n");
        console.log(err);
    }
}

/* Adds visitor instance to the database */
async function addVisit(visit){
    try {
        let db = await DbConnection.Get();
        db.collection("visitors").insertOne(visit);
    }

    catch(err){
        console.log("Could not add visit do database.\n");
        console.log(err);
    }
}


/* Delete all database data */
async function clearDatabase(){
    try {
        let db = await DbConnection.Get();
        var numInstances = await db.collection("visitors").estimatedDocumentCount();
        console.log(numInstances);
        if(numInstances > 0){
            db.collection("visitors").drop();
            console.log("Database cleared!\n");
        }
        else{
            console.log("Database is already empty\n");
        }
    }

    catch(err){
        console.log("Could not delete database.\n");
        console.log(err);
    }
}



module.exports = {getCompanyName, getClientAddress, getAllHistory, findIP, addVisit, clearDatabase, Visit};
var express = require('express');
var router = express.Router();
var controller = require('../controllers/controller')
const axios = require('axios');
var MongoClient = require('mongodb').MongoClient;
const { JSONCookies } = require('cookie-parser');


/* GET home page. */
router.get('/', function(req, res, next) {
   // controller.getCompanyName('208.73.132.195');
    //console.log('result in index= ' + controller.getCompanyName('208.73.132.195'));
    //console.log('Clients IP = ' + controller.getClientAddress(req));
   // res.send('result = ' + controller.getCompanyName('208.73.132.195'));

});

/* GET API page. */
router.get('/api', function(req, res, next) {

    console.log(controller.getCompanyName('208.73.132.195'));
     res.send(controller.getCompanyName('208.73.132.195'));
 });

  /* Clear database. */
  router.get('/api/clear', function(req, res, next) {
    controller.clearDatabase();
     res.send('Database cleared');
 });


 /* GET API page. */
router.get('/api/json', async (req, res) => {
    
    //console.log("Is this the IP: " +  req.header('x-forwarded-for') || req.connection.remoteAddress)
    //console.log("Client resquest from: " + controller.getClientAddress(req));
    var visitorIP = controller.getClientAddress(req)
    var url ="http://ip-api.com/json/" + visitorIP;

    // Check to see if IP data is in database
    controller.getAllHistory();
    var visit;
    result = await controller.findIP(visitorIP)

        if(result){
            // Found the IP in the database
            console.log("same visitor");
            visit = new controller.Visit(visitorIP, result.org);
        }
        else {
            // New Visitor based of IP
            console.log("new visitor");
            
            // Retrieve IP infromation if not in the database
            await axios.get(url)
            .then(response => {
                console.log("axios response: " + response.data.status);
                // console.log(response.data);
                visit = new controller.Visit(visitorIP, response.data.org);
                //res.send(response.data);
            })
            .catch(error => {
                console.log(error);
            });


        }
    


    // Log vistor traffic in the database
    console.log("Logging visit \n" + JSON.stringify(visit));
    controller.addVisit(visit);
    res.sendStatus(200);

 }
 
 );

module.exports = router;

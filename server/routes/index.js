var express = require('express');
var router = express.Router();
var controller = require('../controllers/controller')
const axios = require('axios');
var MongoClient = require('mongodb').MongoClient;


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


 /* GET API page. */
router.get('/api/json', async (req, res) => {
    
    //console.log("Is this the IP: " +  req.header('x-forwarded-for') || req.connection.remoteAddress)
    console.log("Client resquest from: " + controller.getClientAddress(req));
    var url ="http://ip-api.com/json/" + controller.getClientAddress(req);


    // Check to see if IP data is in database
    controller.getAllHistory();

    // Retrieve IP infromation if not in the database
    axios.get(url)
        .then(response => {
            console.log(response.data.status);
            // console.log(response.data);
            res.send(response.data);
        })
        .catch(error => {
            console.log(error);
        });


    // Log vistor traffic in the database

 }
 
 );

module.exports = router;

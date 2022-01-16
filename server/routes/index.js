var express = require('express');
var router = express.Router();
var controller = require('../controllers/controller')
const axios = require('axios');

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

    console.log(controller.getClientAddress(req))
    var ip = req.headers['x-forwarded-for'] ||
     req.socket.remoteAddress ||
     null;
    console.log("I think the IP is " + ip);

    var url ="http://ip-api.com/json/" + controller.getClientAddress(req);
    axios.get(url)
        .then(response => {
            console.log(response.data.status);
            // console.log(response.data);
            res.send(response.data);
        })
        .catch(error => {
            console.log(error);
        });

 }
 
 );

module.exports = router;

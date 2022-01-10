var express = require('express');
var router = express.Router();
var controller = require('../controllers/controller')

/* GET home page. */
router.get('/', function(req, res, next) {
   // controller.getCompanyName('208.73.132.195');
    console.log('result in index= ' + controller.getCompanyName('208.73.132.195'));
    console.log('Clients IP = ' + controller.getClientAddress(req));
    res.send('result = ' + controller.getCompanyName('208.73.132.195'));

});

module.exports = router;

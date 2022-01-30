const express = require('express');
const app = express();
const router = express.Router();
const controller = require('../controllers/controller')
const axios = require('axios');
const MongoClient = require('mongodb').MongoClient;
const config = require('../config.json');
const jwt = require('jsonwebtoken');
const withAuth = require('../controllers/authMiddleware');

/* Admin Login. */
router.post('/api/authenticate', function (req, res, next) {
    console.log("Someone trying to log on with :" + JSON.stringify(req.body.user));

    try {
        if (req.body.user === config.admin && req.body.pass === config.pass) {
            // Send token
            const userName = config.admin
            const payload = { userName };
            const token = jwt.sign(payload, config.tokenKey, {
                expiresIn: '1h'
            });
            res.cookie('token', token, { httpOnly: true })
                .sendStatus(200);
        }
        else {
            res.sendStatus(401)
        }
    }
    catch (err) {
        console.log(err);
    }

});

/* GET check clients token*/
app.get('/api/checkToken', withAuth, function (req, res) {
    res.sendStatus(200);
});

/* GET visitor information (use middleware token check [withAuth])*/
router.get('/api/visitors', withAuth, async (req, res) => {


    controller.getAllHistory()
    .then((result) => res.send(result));


});


/* Clear database. */
router.get('/api/clear', withAuth, function (req, res, next) {
    controller.clearDatabase();
    res.send('Database cleared');
});


/* GET API page. */
router.get('/api/json', async (req, res) => {

    //console.log("Is this the IP: " +  req.header('x-forwarded-for') || req.connection.remoteAddress)
    //console.log("Client resquest from: " + controller.getClientAddress(req));
    var visitorIP = controller.getClientAddress(req)
    var url = "http://ip-api.com/json/" + visitorIP;

    // Check to see if IP data is in database
    controller.getAllHistory();
    var visit;
    result = await controller.findIP(visitorIP)

    if (result) {
        // Found the IP in the database
        console.log("same visitor");
        visit = new controller.Visit(visitorIP, result.org, result.isp);
    }
    else {
        // New Visitor based of IP
        console.log("new visitor");

        // Retrieve IP infromation if not in the database
        await axios.get(url)
            .then(response => {
                console.log("axios response: " + response.data.status);
                console.log(response.data);
                visit = new controller.Visit(visitorIP, response.data.org, response.data.isp);
                //res.send(response.data);
            })
            .catch(error => {
                console.log(error);
            });


    }

    
    // Log vistor traffic in the database
    console.log("Logging visit \n" + JSON.stringify(visit));
    controller.addVisit(visit);
    res.send(visit);

}

);



module.exports = router;

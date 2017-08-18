// Handles /owner URLs

var express = require('express');
var router = express.Router();
var pool = require('../modules/pool.js')

// app.use('/owner', owner)

router.post('/', function(req, res) {
    pool.connect(function(errorConnectingToDatabase, client, done) {
        if (errorConnectingToDatabase) {
            console.log('error connecting to DB', errorConnectingToDatabase);
            res.sendStatus(500);
        } else {
            client.query('INSERT INTO owners (firstName, lastName) VALUES ($1, $2)', [req.body.firstName, req.body.lastName], function(errorMakingQuery, result) {
                done();
                if (errorMakingQuery) {
                    console.log('errorMakingQuery', errorMakingQuery);
                    res.sendStatus(500);
                } else {
                    res.sendStatus(200)
                }
            })
        }
    })
});




module.exports = router;
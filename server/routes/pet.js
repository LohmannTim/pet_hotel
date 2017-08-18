// Handles /pet URLs

var express = require('express');
var router = express.Router();
var pool = require('../modules/pool.js')



router.post('/', function (req, res) {
    console.log('hit post route');
    console.log(req.body);
    pool.connect(function (errorConnectingToDatabase, client, done) {
        if (errorConnectingToDatabase) {
            console.log('error connecting to database', errorConnectingToDatabase);
            res.sendStatus(500);
        } else {
            client.query('INSERT INTO pets (name, breed, color) VALUES ($1, $2, $3)', [req.body.petName, req.body.petBreed, req.body.petColor], function (errorMakingQuery, result) {
                done();
                if (errorMakingQuery) {
                    console.log('error making query', errorMakingQuery);
                    res.sendStatus(500);
                } else {
                    res.sendStatus(200);
                }
            })
        }

    })
});



module.exports = router;
// Handles /pet URLs

var express = require('express');
var router = express.Router();
var pool = require('../modules/pool.js');

router.get('/', function(req, res){
	pool.connect(function (errorConnectingToDatabase, client, done) {
		if (errorConnectingToDatabase) {
			console.log('Error connecting to database', errorConnectingToDatabase);
			res.sendStatus(500);
		} else {
			client.query('SELECT * FROM pets JOIN owners ON owners.id=pets.owner_id;', function (errorMakingQuery, result) {
				done();
				if (errorMakingQuery) {
					console.log('Error making database query', errorMakingQuery);
					res.sendStatus(500);
				} else {
					res.send(result.rows); 
				}
			});
		}
	});
});

router.post('/', function (req, res) {
    console.log('hit post route');
    console.log('req.body is', req.body);
    pool.connect(function (errorConnectingToDatabase, client, done) {
        if (errorConnectingToDatabase) {
            console.log('error connecting to database', errorConnectingToDatabase);
            res.sendStatus(500);
        } else {
            client.query('INSERT INTO pets (name, breed, color) VALUES ($1, $2, $3)', [req.body.name, req.body.breed, req.body.color], function (errorMakingQuery, result) {
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
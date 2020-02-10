var express = require('express');
var router = express.Router();

/// Method: Get, Route '/'
router.get('/', function(req, res, next) {
    res.status(200).send("index page");
});

/// Method: Get, Route '/hi/:id' Example '/hi/1234'
router.get('/hi/:id', function(req, res, next) {
    res.status(200).send(req.params.id + ': hi!');
});

/// Method: Get, Route '/json'
router.get('/json', function(req, res, next) {
    var a = {
        hello: "hi",
        nice_to_meet_u: "glad_to_meet_u",
        goodbye: "good_night",
    }
    res.status(200).send(a);
});

/// Method: Get, Route '/who/:name/:age' Example '/who/mori/36'
router.get('/who/:name/:age', function(req, res, next) {
    var user = {
        name: req.params.name,
        age: req.params.age
    }
    res.status(200).send(user);
});

module.exports = router;

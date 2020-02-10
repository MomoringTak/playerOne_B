var express = require('express');
var router = express.Router();

/// Method: Get, Route '/test2/who/:name/:age' Example '/test2/who/mori/36'
router.get('/test2/who/:name/:age', function(req, res, next) {
    var user = {
        name: req.params.name,
        age: req.params.age
    }
    res.status(200).send(user);
});

module.exports = router;
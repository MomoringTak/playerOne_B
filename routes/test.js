var express = require('express');
var router = express.Router();

/// Method: Get, Route '/test/who/:name/:age' Example '/test/who/mori/36'
router.get('/who/:name/:age', function(req, res, next) {
    var user = {
        name: req.params.name,
        age: req.params.age
    }
    res.status(200).json(user);
});

/// Method: Get, Route '/test/whobody' Required Body 'name, age'
router.get('/whobody', function(req, res, next) {
    if(req.body.name === undefined || req.body.age === undefined) {
        res.status(400).json({ success: "fail", msg: "이름 혹은 나이가 입력되지 않았습니다." });
    }
    var user = {
        name: req.body.name,
        age: req.body.age
    }
    res.status(200).json({success: "success", user: user });
});

/// Method: Get, Route '/test/query' Required Query Params 'name, age'
router.get('/query', function(req, res, next) {
    if(req.query.name === undefined || req.query.age === undefined) {
        res.status(400).json({ success: "fail", msg: "이름 혹은 나이가 입력되지 않았습니다." });
    }
    var user = {
        name: req.query.name,
        age: req.query.age
    }
    res.status(200).json({success: "success", user: user });
});

module.exports = router;
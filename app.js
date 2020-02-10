var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors'); // add cors

var router = require('./routes/index');
var test = require('./routes/test');
var test2 = require('./routes/test2');
var logger = require('morgan');


var app = express();

app.use(logger('dev'));
app.use(cors()); //add cors
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true })); //false ==> true
app.use(cookieParser());

app.use('/', router);
app.use('/test/', test);
app.use(test2);


// catch 404 and forward to error handler
app.use( function(req, res, next) {
    console.log('404 error');
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});


// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        console.log('500 error');
        res.status(err.status || 500);
        res.send({ message: err.message, error: err });
    });
}
else{
    // production error handler
    // no stacktraces leaked to user
    app.use(function(err, req, res, next) {
        console.log('500 error');
        res.status(err.status || 500);
        res.send({ message: err.message, error: {} });
    });
}
  
module.exports = app;
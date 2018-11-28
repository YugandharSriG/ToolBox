/**
    @author Kalimuthu Rengaswamy (51510641)
**/ 

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var toolboxRouter = require('./routes/toolbox');
var toolRouter = require('./routes/tool');
var bodyParser = require('body-parser');

var db = require('./datastore/db');
var cors = require('cors');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept);
  next();
}
/*
req.headers.origin
X-HTTP-Method-Override
X-Requested-With, Origin, Content-Type, Accept
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
*/

app.use(allowCrossDomain);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

db.init('smartToolDB.db', function(err, result){
  if(err){
    console.log('ERROR : '+err);
  }else{
    console.log(result)
  }
});

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/toolbox', toolboxRouter);
app.use('/tool', toolRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
app.listen(process.env.PORT || 8080, () => console.log('Example app listening on port 8080!'))
module.exports = app;

var express = require('express');
var app = express();
var path = require('path');
var engine = require('ejs-mate');
var ejs = require('ejs');
var flash = require('connect-flash');

// set static folder
app.use(express.static(__dirname + '/assets'));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));
app.use(express.static(path.join(__dirname, 'views')));
app.use('/uploads', express.static('uploads'));


//Create EJS Engine view
app.set('view engine', 'html');
app.engine('ejs', engine);
app.set('view engine', 'ejs');

app.use(flash());


var routes = require('./routes/index.js');
app.use(routes);

app.set('port', (process.env.PORT || 8080));
app.listen(app.get('port'), function() {
  console.log('Hurray am running on port ' + app.get('port'))
});


// Node Dependencies
var express = require('express');
var bodyParser = require('body-parser');

// Open Server
var PORT = process.env.PORT || 8080;

var app = express();

 app.use(express.static('public'));


app.use(bodyParser.urlencoded({ extended: true}));

// Handlebars
var exphbs = require('express-handlebars');


//app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.engine("handlebars", exphbs({ defaultLayout: "main",
layoutsDir: __dirname + '/views/layouts',
}));

app.set('view engine', 'handlebars');


var router = require('./controllers/burgers_controller.js');
app.use('/', router);


// ensure web server is starting with dynamic port 
app.listen(PORT, function() 
{
  console.log("App listening on PORT " + PORT);
});

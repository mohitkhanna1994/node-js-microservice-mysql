var express = require("express");
var bodyParser = require("body-parser");
var morgan = require("morgan");
var config = require("./config");
var cors = require('cors');

var app = express();

app.use(cors());

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan('dev'));

var api = require('./app/routes/api')(app, express);

app.use('/api', api);


app.listen(config.port, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log("localhost:3000");
    }
});

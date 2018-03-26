var express = require('express');
var app = express();
var mongoose = require('mongoose');
var port = process.env.DBWEBB_PORT || 3000;
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

const dsn =  process.env.DBWEBB_DSN || "mongodb://localhost:27017/";
mongoose.connect(dsn, { useMongoClient: true });
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error with mongodb:'));

db.once('open', function() {
  console.log("Connected to mongodb.")
});

app.use(express.static('./public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended': 'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));
app.use(methodOverride('X-HTTP-Method-Override'));

require('./app/routes.js')(app);

server = app.listen(port);
console.log("App listening on port " + port);

const io = require("socket.io")(server)


io.on('connection', (socket) => {
	console.log('New user connected');

	socket.username = "Anonymous";

    socket.on('change_username', (data) => {
        socket.username = data.username
    });

    socket.on('new_message', (data) => {
        io.sockets.emit('new_message', {message : data.message, username : socket.username});
    });

    socket.on('typing', (data) => {
    	socket.broadcast.emit('typing', {username : socket.username})
    });
});

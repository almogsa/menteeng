// in order to run the server and automatically update changes: nodemon ./server.js
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');


var morgan = require('morgan');             // log requests to the console (express4)
var bodyParser = require('body-parser');    // pull information from HTML POST (express4)
var cors = require('cors');
var path = require("path");

app.use(morgan('dev'));                                         // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
// app.use(methodOverride());
app.use(cors());
//app.use(bodyParser.json()); // define that what should we get in our parser should be json
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'DELETE, PUT');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
const root = './';


var messages = [{text: 'some text 1', owner: 'Tim'}, {text: 'other text', owner: 'Jane'}]
var users = [
                {firstName: 'Tom', email: 't@t.com', password : 't@t.com', id : 0, position: 'manager'},
                {firstName: 'tom', email: 'tomvin6@gmail.com', password : 'tom', id : 0, position: 'worker'}
            ]; // in the future is DB instead of memory
var loggedInUsers = [
            ]; // in the future is DB instead of memory
// create routers
var api = express.Router(); // create a new router
var auth = express.Router(); // create a new router
// define prefix for each router
app.use('/api', api); // before get and post, need to write path: api/message...
app.use('/auth', auth);

// api requests
api.get('/messages', (req, res) => {
    res.json(messages);
})
api.get('/all-users', (req, res) => {
    res.json(users);
})

api.get('/messages/:user', (req, res) => {
    var user = req.params.user;
    var result = messages.filter( message => message.owner === user);
    res.json(result);
})

// this method is being called when someone add a new message
api.post('/messages', (req, res) => {
    messages.push(req.body);
    res.json(req.body);
    // res.sendStatus(200); // return legal status
})

api.get('/users/me', checkAuthenticated, (req, res) => {
    res.json(users[req.user]);
})

// user edit details
api.post('/users/me', checkAuthenticated, (req, res) => {
    res.json(users[req.user]);
    
    var user = users[req.user];
    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;
    
    res.json(user);
})

// auth requests:
function sendToken(user, res) {
    var token = jwt.sign(user.id, '123'); // in production key must not be hardcoded, used id we get from DB
    return res.json({firstName: user.firstName, 'token' : user.email}); // return the token to client
}
function sendAuthError(res){
return res.json({success: false, message: 'email or password incorrect'});
}

function checkAuthenticated(req, res, next) {
    if(!req.header('authorization')) {
        return res.status(401).send({message: 'Unauthorized request. missing authentication header'});
    }
    var token = req.header('authorization').split(' ')[1];
    var payload = jwt.decode(token, '123');
    if (!payload) {
        return res.status(401).send({message: 'unauthorized request, authentication header is invalid'});
    }
    req.user = payload;

    next();
}
auth.post('/register', (req, res) => {
    let index = users.push(req.body) - 1; // add to DB in future, index is the return id from DB
    let user = users[index];
    user.id = index;
    console.log('user register: ' + user);
    sendToken(user, res);
})
auth.post('/login', (req, res) => {
	console.log('user login: ' + req.body.email + 'password: ' + req.body.password);
    let user = users.find(user=> user.email === req.body.email);
    if (!user) {
        sendAuthError(res);
    }
    if (user.password === req.body.password) {
    	loggedInUsers.push(user);
        sendToken(user, res);
    }
    sendAuthError(res);
})
auth.post('/logout', (req, res) => {
	console.log('user login: ' + req.body.email + 'password: ' + req.body.password);
    loggedInUsers = []; // clear all users
    return res.status(200).send({message: 'logged out successfully'});
})


// start server
//let defaultPort = 3000;
//console.log('server listening to connection in port: ' + defaultPort);
//app.listen(defaultPort);


app.use(express.static(path.join(root, 'dist')));
app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});

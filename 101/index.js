var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
	//res.sendFile(__dirname + '/index.html');
	res.send('<h1>Hello world</h1>');
});

io.on('connection', function(socket){
	console.log('a user connected');
});

http.listen(3000, '10.0.0.91', function(){
	console.log('listening on *:3000');
});
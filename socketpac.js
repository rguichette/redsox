var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);


io.on('connection', function(socket){
//   console.log('a user connected');
    socket.on("user_online", (t)=>{
        // console.log(`user ${t} connected`);
        socket.emit(`user ${t} connected`)
        
    })
    socket.on("message",(msg)=>{
        console.log(msg);
        io.emit("msg", msg)
        
    })
});


http.listen(3000, function(){
  console.log('listening on *:3000');
});
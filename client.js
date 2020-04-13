console.log("hello client!");
//mime the sign in 

var socket = require('socket.io-client')('http://localhost:3000');

let username = process.argv.slice(2)


function sendmsg(message){
    let msg = process.argv.slice(2);
    return message
}
socket.on('connect', function(){
    //sending username because we'd be sending the _id through cookies(immatate)
    socket.emit("user_online", username);
    console.log("connected yo!");
    
    console.log(username + " connected");
    
    "__________________________________"
    process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', function (text) {
//   console.log(text);
socket.emit("message", text)

  if (text.trim() === 'quit') {
    // done();
  }
});
    
    
});

socket.on("msg", function(msg){
    console.log(msg);
    
})
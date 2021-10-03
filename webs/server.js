const io = require('socket.io')(3000);

io.on('connection',socket=>{
    socket.send('你好');
    console.log(socket.id);
})
const io = require('socket.io')(3000);

io.on('connection',socket=>{
    socket.send('你好');
    console.log(socket.id);
    socket.on('private message', ( anotherSocketId, msg ) => {
        socket.to(anotherSocketId).emit('private message', socket.id, msg);
    })
})

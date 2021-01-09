const socketIO = require ('socket.io');

let socket ;

const connection = (server) =>{
    const io = socketIO(server);

    io.on('connection', newSocket =>{
        socket = newSocket;
        console.log("la id es : ",newSocket.id);
    })
}

const getSocket = ()=>socket;
module.exports = {connection, getSocket}



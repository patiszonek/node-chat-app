const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');


const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log(`New user connected`);

    socket.emit('newMessage', {
        from: 'patryk.senska@gmail.com',
        text: 'test text',
        createAt: 123
    });

    socket.on('disconnect', () => {
        console.log(`User was disconnected`);
    });

    socket.on('createMessage', (newMessage) => {
        console.log(`createMessage`, newMessage);
        io.emit('newMessage', {
            from: newMessage.from,
            text: newMessage.text,
            createAt: new Date().getTime()
        })
    });
});



server.listen(port, () => {
    console.log(`Server is running at localhost:${port}`);
});

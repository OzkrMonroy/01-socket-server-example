const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

app.use(express.static(__dirname + '/public'))
io.on('connection', (socket) => {
    console.log('Client is connected, with id:' + socket.id);
    socket.emit('welcome-message', {
        message: 'Welcome to the server',
        date: new Date()
    });
});
server.listen(8080, () => {
    console.log('Server running in port: 8080');
});
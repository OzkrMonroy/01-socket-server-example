const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
io.on('connection', () => {
    console.log('Client is connected');
});
server.listen(8080, () => {
    console.log('Server running in port: 8080');
});
const app = require('./app');

const server = require('http').Server(app);
server.listen(Number(`${process.env.PORT}`),'localhost', ()=> {
    console.log('Server Started');
});
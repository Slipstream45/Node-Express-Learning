const http = require('http');

const server = http.createServer((req, res)=>{
    console.log('request event');
    res.end("hello world");
})

server.listen(9001, ()=>{
    console.log('Server listening on port 9001');
})
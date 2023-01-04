import http from 'http';

const server = http.createServer((req, res) => {
    console.log('Request received: ', req);
    res.write("Hello World");
    res.end();
}).listen(8080);

console.log("Server is running on port 8080");
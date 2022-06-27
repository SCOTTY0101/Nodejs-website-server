/*
*Start a nodejs website server. Text on local host at 127.0.0.1:3000  (port :3000) 
*First install nodejs and np
*/

//http module
const http = require("http");
const hostname = '127.0.0.1';
const port = 3000;

//create http server that listens on port 3000

const server = http.createServer((req, res) =>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');
});

//Start server with:  node index.js

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname} : ${port}/`);
});

/* 
*   Use with package.json file. Double quotes when working with JSON.
*
*   "script" {
*       "start" : "node index.js"
*       }
*
*/ 

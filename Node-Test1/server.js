
const http = require("http");
const fs = require('fs').promises;
const path = require('path');

const host = 'localhost';
const port = 8000;

const requestListener = function (req, res) {
    var fileDirectory = path.basename(__dirname + "/index.html");
    fs.readFile(fileDirectory)
        .then(contents => {
            res.setHeader("Content-Type", "text/html");
            res.writeHead(200);
            res.end(contents);
        })
        .catch(err => {
            res.writeHead(500);
            res.end(err);
            return;
        });
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});

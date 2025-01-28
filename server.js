// server.js
const http = require('http');
const path = require('path');
const fileHandler = require('./modules/fileHandler');

const PORT = 3000;
const PUBLIC_DIR = path.join(__dirname, 'public');

const server = http.createServer((req, res) => {
    // Convert URL to file path
    let filePath = path.join(PUBLIC_DIR, 
        req.url === '/' ? 'index.html' : req.url);

    // Serve the file
    fileHandler.serveFile(filePath, res);
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
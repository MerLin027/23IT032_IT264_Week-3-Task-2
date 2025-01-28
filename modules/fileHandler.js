// modules/fileHandler.js
const fs = require('fs');
const path = require('path');

// Define content types for different file extensions
const contentTypes = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.jpg': 'image/jpeg',
    '.png': 'image/png',
    '.js': 'text/javascript'
};

function getContentType(filePath) {
    return contentTypes[path.extname(filePath)] || 'text/plain';
}

function serveFile(filePath, response) {
    fs.readFile(filePath, (error, content) => {
        if (error) {
            if (error.code === 'ENOENT') {
                // File not found - serve 404
                serve404(response);
            } else {
                // Server error
                response.writeHead(500);
                response.end('Server Error: ' + error.code);
            }
        } else {
            // Successful response
            response.writeHead(200, { 'Content-Type': getContentType(filePath) });
            response.end(content);
        }
    });
}

function serve404(response) {
    response.writeHead(404, { 'Content-Type': 'text/html' });
    response.end('<h1>404 Not Found</h1>');
}

module.exports = {
    serveFile,
    serve404
};
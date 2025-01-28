# Basic Static File Server

## Overview
This project is a simple HTTP server built using Node.js. It serves static files like **HTML, CSS, and images** from a `public/` directory and handles different URL paths manually. It also includes error handling for **404 Not Found** responses when a requested file is missing.

## Features
- Serves static files (HTML, CSS, images, etc.).
- Uses Node.js `http` and `fs` modules to read and serve files.
- Implements custom modules (`fileHandler.js`) using `require` and `module.exports`.
- Returns a **404 error page** if the requested file is not found.

## Project Structure
```
project/
  ├── modules/
  │   └── fileHandler.js  # Handles file serving logic
  ├── public/
  │   ├── index.html      # Main webpage
  │   ├── styles.css      # Stylesheet
  │   └── images/
  │       └── example.jpg # Sample image
  ├── server.js           # Main server file
  ├── README.md           # Project documentation
```

## Installation & Usage

### Prerequisites
Ensure you have **Node.js** installed on your system.

### Clone the Repository
```sh
git clone https://github.com/MerLin027/23IT032_IT264_Week-3-Task-2.git
cd 23IT032_IT264_Week-3-Task-2
```

### Install Dependencies (if any)
Currently, this project doesn't require additional packages, as it uses built-in Node.js modules.

### Run the Server
```sh
node server.js
```

### Access the Webpage
- Open your browser and go to:  
  **`http://localhost:3000/`**

## How It Works
- The **server.js** file creates an HTTP server using `http.createServer()`.
- It maps incoming **URL requests** to file paths in the `public/` directory.
- The `fileHandler.js` module reads and serves the requested files.
- If the requested file is not found, it returns a **404 Not Found** response.

## Error Handling
- If a file is missing, the server responds with:  
  **`404 Not Found`** and displays a simple error page.
- If there is a server-side error, it sends a **500 Internal Server Error** response.

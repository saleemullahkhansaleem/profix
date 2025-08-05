const http = require("http");
const fs = require("fs");
const path = require("path");
const url = require("url");

const PORT = 3002;

const mimeTypes = {
  ".html": "text/html",
  ".js": "text/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpg",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".wav": "audio/wav",
  ".mp4": "video/mp4",
  ".woff": "application/font-woff",
  ".ttf": "application/font-ttf",
  ".eot": "application/vnd.ms-fontobject",
  ".otf": "application/font-otf",
  ".wasm": "application/wasm",
  ".ico": "image/x-icon",
  ".webp": "image/webp",
  ".woff2": "font/woff2",
  ".xml": "application/xml",
  ".txt": "text/plain",
};

const server = http.createServer((req, res) => {
  let filePath = url.parse(req.url).pathname;

  // Default to index.html for root
  if (filePath === "/") {
    filePath = "/index.html";
  }

  // Remove leading slash and resolve path
  filePath = path.join(__dirname, "out", filePath);

  // Get file extension
  const extname = path.extname(filePath).toLowerCase();
  const contentType = mimeTypes[extname] || "application/octet-stream";

  // Read file
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === "ENOENT") {
        // File not found, try index.html
        fs.readFile(
          path.join(__dirname, "out", "index.html"),
          (err, content) => {
            if (err) {
              res.writeHead(404);
              res.end("File not found");
            } else {
              res.writeHead(200, { "Content-Type": "text/html" });
              res.end(content, "utf-8");
            }
          }
        );
      } else {
        res.writeHead(500);
        res.end(`Server Error: ${err.code}`);
      }
    } else {
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content, "utf-8");
    }
  });
});

server.listen(PORT, () => {
  console.log(`🚀 Static server running at http://localhost:${PORT}`);
  console.log(`📁 Serving files from: ${path.join(__dirname, "out")}`);
  console.log(`🌐 Open your browser and navigate to: http://localhost:${PORT}`);
});

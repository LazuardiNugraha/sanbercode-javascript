const http = require('http');

const requestListener = (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain'});

  res.end('Hello, World! \n');
}

const server = http.createServer(requestListener);

const PORT = 6969;
server.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
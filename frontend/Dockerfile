# Gunakan image Node.js
FROM node:latest

# Set direktori kerja di dalam container
WORKDIR /usr/src/app

# Salin semua file di dalam direktori src ke dalam direktori kerja di dalam container
COPY src/ .

# Install dependencies jika diperlukan
# Misalnya jika Anda menggunakan Express
# COPY package.json .
# RUN npm install

# Port yang akan digunakan oleh server Node.js
EXPOSE 3000

# Command untuk menjalankan server Node.js
CMD ["node", "-e", "const http = require('http'); const fs = require('fs'); const server = http.createServer((req, res) => {  fs.readFile('index.html', (err, data) => {    if (err) {      res.writeHead(404, {'Content-Type': 'text/html'});      return res.end('404 Not Found');    }    res.writeHead(200, {'Content-Type': 'text/html'});    res.write(data);    return res.end();  });});server.listen(3000, '0.0.0.0', () => {  console.log('Server running on port 3000');});"]

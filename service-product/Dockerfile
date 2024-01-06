# Gunakan image Node.js
FROM node:latest

# Set direktori kerja di dalam container
WORKDIR /usr/src/app

# Salin file yang diperlukan (mis. app.js, package.json, dll.) ke dalam container
COPY package.json .
COPY app.js .

# Install dependensi
RUN npm install

# Port yang digunakan oleh layanan produk
EXPOSE 3002

# Command untuk menjalankan layanan ketika kontainer dimulai
CMD ["node", "app.js"]

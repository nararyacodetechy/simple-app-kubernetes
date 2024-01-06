# Gunakan image Node.js
FROM node:latest

WORKDIR /usr/src/app

COPY package.json .
COPY app.js .

RUN npm install

# Port layanan pembayaran
EXPOSE 3003

CMD ["node", "app.js"]

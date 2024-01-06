FROM node:latest

WORKDIR /usr/src/app

COPY package.json .
COPY app.js .

RUN npm install

# Port layanan pengiriman
EXPOSE 3004

CMD ["node", "app.js"]

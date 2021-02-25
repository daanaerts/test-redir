FROM node:15
WORKDIR /usr/src/app

COPY package*.json ./
COPY . .
RUN npm install
RUN npm build

EXPOSE 8080
CMD [ "node", "server.js" ]
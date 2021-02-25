FROM node:15
WORKDIR /usr/src/app

COPY package*.json ./
COPY . .
RUN npm install
RUN npm run build
ENV PORT=8080
EXPOSE 8080
CMD [ "npm", "start" ]
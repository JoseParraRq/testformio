
FROM node:18-alpine

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/index.js

WORKDIR /home/node/app

COPY package*.json ./

USER root

RUN npm install

COPY --chown=node:node . .

EXPOSE 8080

CMD [ "npm", "start" ]
# syntax=docker/dockerfile:1

FROM node:latest
ENV NODE_ENV=prod

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install

COPY . .

CMD [ "node", "index.js" ]
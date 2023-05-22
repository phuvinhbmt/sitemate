# syntax=docker/dockerfile:1
FROM node:16

# create app directory
WORKDIR /usr/src/app

COPY ["package.json", "package-lock.json", "./"]

RUN npm install

COPY . .

CMD [ "npm", "start"]

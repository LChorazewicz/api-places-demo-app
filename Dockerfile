FROM node:10

WORKDIR /app
COPY . /app

CMD npm install && npm run start-with-docker
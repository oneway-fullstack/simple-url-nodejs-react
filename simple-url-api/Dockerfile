FROM node:14
RUN mkdir -p /usr/src/simple-url-api
WORKDIR /usr/src/simple-url-api
COPY package.json .
RUN npm install
COPY . .
CMD npm db:migration
CMD npm start

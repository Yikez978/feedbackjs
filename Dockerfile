FROM node

COPY app.js .
COPY public .
COPY package.json .

RUN npm install express --save

EXPOSE 3000

CMD node app.js

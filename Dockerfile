FROM node:7.7.4

EXPOSE 3000

WORKDIR /tmp

# Copy all the code into the container
COPY app.js /tmp/app.js
COPY public /tmp/public
COPY package.json /tmp/package.json

# Install all the node packages
RUN npm install redis
RUN npm install express --save

# Run our application
ENTRYPOINT ["node", "/tmp/app.js"]

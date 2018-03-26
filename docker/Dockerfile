FROM node:alpine

# Create a workdir
RUN mkdir -p /app
WORKDIR /app

COPY package.json /app
RUN npm install

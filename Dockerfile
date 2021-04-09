FROM node:latest

ARG PORT=8080
ARG BASE_URL=https://api.nasa.gov/planetary/apod

ENV port $PORT
ENV base_url $BASE_URL

WORKDIR .
COPY package.json package-lock.json ./
RUN npm install
COPY src ./src
CMD PORT=$port BASE_URL=$base_url node src/index.js

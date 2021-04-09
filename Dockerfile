FROM node:latest

ARG PORT
ARG BASE_URL

ENV port $PORT
ENV base_url $BASE_URL

WORKDIR .
COPY package.json package-lock.json ./
RUN npm install
COPY src ./src
CMD PORT=$PORT BASE_URL=$BASE_URL node src/index.js

FROM node:latest

ARG BASE_URL=https://api.nasa.gov/planetary/apod

ENV PORT 8080

# Install dependencies
WORKDIR .
COPY package.json ./
RUN npm install

# Copy files
COPY .babelrc ./
COPY src ./src

ENTRYPOINT PORT=$PORT BASE_URL=$BASE_URL npm run serve

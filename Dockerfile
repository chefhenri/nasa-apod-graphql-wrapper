FROM node:latest

ARG BASE_URL=https://api.nasa.gov/planetary/apod

ENV PORT 8080
ENV MOCK false
ENV BASE_URL $BASE_URL

# Install dependencies
WORKDIR .
COPY package.json ./
RUN npm install

# Copy files
COPY .babelrc ./
COPY src ./src

EXPOSE $PORT

ENTRYPOINT MOCK=$MOCK PORT=$PORT BASE_URL=$BASE_URL npm run serve

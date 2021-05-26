FROM node:latest

ARG BASE_URL=https://api.nasa.gov/planetary/apod
ARG MOCK

ENV PORT 8080
ENV MOCK $MOCK

# Install dependencies
WORKDIR .
COPY package.json ./
RUN npm install

# Copy files
COPY .babelrc ./
COPY src ./src

ENTRYPOINT BASE_URL=$BASE_URL MOCK=${MOCK:=false} PORT=$PORT npm run serve

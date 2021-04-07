FROM node:latest

WORKDIR .
COPY package.json package-lock.json ./
RUN npm install
COPY src ./src
CMD ["node", "src/index.js"]

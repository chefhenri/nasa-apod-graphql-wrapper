const express = require('express');
const {ApolloServer} = require('apollo-server-express');
const {resolvers, typeDefs} = require('./api/apod.api');
require('dotenv').config()

const port = process.env.PORT || 8080;

const app = express();

// Build Apollo server
const server = new ApolloServer({resolvers, typeDefs});
server.applyMiddleware({app});

// Run server
app.listen({port}, () => {
    console.log(`Server ready at http://localhost:${port}${server.graphqlPath}`)
})

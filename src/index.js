const express = require('express');
const {ApolloServer} = require('apollo-server-express');
const {resolvers, typeDefs} = require('./api/apod.api');
require('dotenv').config()

const app = express();

// Build Apollo server
const server = new ApolloServer({resolvers, typeDefs});
server.applyMiddleware({app});

// Run server
app.listen(process.env.PORT, () => {
    console.log(`Server ready at http://localhost:${process.env.PORT}${server.graphqlPath}`)
})

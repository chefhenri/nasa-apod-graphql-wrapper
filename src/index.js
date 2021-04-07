const express = require('express');
const {ApolloServer, makeExecutableSchema} = require('apollo-server-express');
const {typeDefs, resolvers} = require('./api/apod.api');

// import express from 'express';
// import {ApolloServer, makeExecutableSchema} from 'apollo-server-express';
// import {typeDefs, resolvers} from "./api/apod.api";

const port = process.env.PORT || 8080;

const app = express();

const schema = makeExecutableSchema({typeDefs, resolvers})

// Build Apollo server
const server = new ApolloServer({schema});
server.applyMiddleware({app});

// Run server
app.listen({port}, () => {
    console.log(`Server ready at http://localhost:${port}${server.graphqlPath}`)
})

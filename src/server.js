const express = require('express');
const {ApolloServer} = require('apollo-server-express');
const {explorer} = require('./index');

require('dotenv').config()

explorer.getSchema()
    .then(schema => {
        const app = express();
        const server = new ApolloServer({schema});
        server.applyMiddleware({app});

        app.listen(process.env.PORT, () => {
            console.log(`Server ready at http://localhost:${process.env.PORT}${server.graphqlPath}`);
        })
    })
    .catch(err => {
        console.log('Failed to start server', err);
    });


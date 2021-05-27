import express from 'express';
import {ApolloServer} from 'apollo-server-express';

import explorer from './index';

explorer.getSchema()
    .then(({typeDefs, resolvers}) => {
        let mock = process.env.MOCK === 'true'

        const app = express();
        const server = new ApolloServer({
            typeDefs: typeDefs,
            resolvers: resolvers,
            mocks: mock
        });
        server.applyMiddleware({app});

        app.listen(process.env.PORT, () => {
            console.log(
                `${mock ? 'Mock server' : 'Server'} ready at http://localhost:${process.env.PORT}${server.graphqlPath}`
            );
        })
    })
    .catch(err => {
        console.log('Failed to start server', err);
    });

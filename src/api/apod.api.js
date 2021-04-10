const fs = require('fs');
const axios = require('axios');

const typeDefs = fs.readFileSync(`${__dirname}/apod.api.gql`, 'utf-8');

const resolvers = {
    Query: {
        today: (parent, args) => {
            // TODO: Build request url conditionally
            return axios.get(`${process.env.BASE_URL}?api_key=${args.apiKey}`)
                .then(res => {
                    console.log(res.data);
                    return res.data;
                })
        },
        apodByDate: (parent, args) => {
            // TODO: Build request url conditionally
            return axios.get(`${process.env.BASE_URL}?api_key=${args.apiKey}&date=${args.date}`)
                .then(res => {
                    console.log(res.data)
                    return res.data
                })
        },
        apodsByDate: (parent, args) => {
            // TODO: Build request url
        },
        randomApods: (parent, args) => {
            // TODO: Build request url
        }
    }
}

module.exports = {
    typeDefs,
    resolvers
}

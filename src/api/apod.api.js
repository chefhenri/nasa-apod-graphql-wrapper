const fs = require('fs');
const axios = require('axios');

const typeDefs = fs.readFileSync(`${__dirname}/apod.api.gql`, 'utf-8');

const resolvers = {
    Query: {
        apod: (parent, args) => {
            return axios.get(`${process.env.BASE_URL}?api_key=${args.apiKey}&date=${args.date}`).then(res => {
                console.log(res.data)
                return res.data
            })
        }
    }
}

module.exports = {
    typeDefs,
    resolvers
}

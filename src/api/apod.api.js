const fs = require('fs');
const axios = require('axios');

const typeDefs = fs.readFileSync(`${__dirname}/apod.api.gql`, 'utf-8');

const resolvers = {
    Query: {
        today: (parent, args) => {
            return axios.get(buildUrl(args))
                .then(res => {
                    console.log(res.data);
                    return res.data;
                })
        },
        apodByDate: (parent, args) => {
            return axios.get(buildUrl(args))
                .then(res => {
                    console.log(res.data);
                    return res.data;
                })
        },
        apodsByDate: (parent, args) => {
            return axios.get(buildUrl(args))
                .then(res => {
                    console.log(res.data);
                    return res.data;
                })
        },
        randomApods: (parent, args) => {
            return axios.get(buildUrl(args))
                .then(res => {
                    console.log(res.data);
                    return res.data;
                })
        }
    }
}

// Converts camel case JSON key to snake case HTTP param format
const convertArgCase = arg => {
    return arg.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
}

// Builds URL params with query args
const buildUrl = args => {
    let params = []
    for (let arg in args) {
        if (args.hasOwnProperty(arg))
            params.push(`${convertArgCase(arg)}=${args[arg]}`)
    }

    return `${process.env.BASE_URL}?${params.join('&')}`
}

module.exports = {
    typeDefs,
    resolvers
}

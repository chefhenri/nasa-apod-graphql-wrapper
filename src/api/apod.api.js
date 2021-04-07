const fs = require('fs');
const axios = require('axios');

// import axios from "axios";
// import {readFileSync} from 'fs';

const BASE_URL = 'https://api.nasa.gov/planetary/apod'

const typeDefs = fs.readFileSync(`${__dirname}/apod.api.graphql`, 'utf-8');

const resolvers = {
    Query: {
        apod: (parent, args) => {
            return axios.get(`${BASE_URL}?api_key=${args.apiKey}&date=${args.date}`).then(res => {
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

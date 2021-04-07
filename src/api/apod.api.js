const axios = require('axios');
const {readFileSync} = require('fs');

// import axios from "axios";
// import {readFileSync} from 'fs';

const BASE_URL = 'https://api.nasa.gov/planetary/apod'

// const fetchApodByDate = (apiKey, date) => {
//     return fetch(`${BASE_URL}?api_key=${apiKey}&date=${date}`).then(res => res.json())
// }

export const typeDefs = readFileSync(`${__dirname}/apod.api.graphql`, 'utf-8');

export const resolvers = {
    Query: {
        apod: (parent, args) => {
            return axios.get(`${BASE_URL}?api_key=${args.apiKey}&date=${args.date}`).then(res => {
                console.log(res.data)
                return res.data
            })
        }
    }
}

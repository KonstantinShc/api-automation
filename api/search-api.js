'use strict';
const baseUrl = 'https://api.chucknorris.io/';
const axios = require('axios');

class Search {
    async getRandomJoke() {
        const response = await axios.get(baseUrl + 'jokes/random');

        return response;
    }
}

module.exports = new Search();
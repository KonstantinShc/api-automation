'use strict';
const Client = require('../api/api-client');


class Random {
    async getRandomJoke() {
        const response = await Client.get('jokes/random');

        return response;
    }
}

module.exports = new Random();
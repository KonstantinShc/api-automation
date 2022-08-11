const { expect } = require('chai');
const jokesApi = require('../api/random-api');

describe('random', async function () {
    it('should get new joke upon each request', async function () {
        const firstjoke = await jokesApi.getRandomJoke();
        const secondjoke = await jokesApi.getRandomJoke();

        expect(firstjoke.data.value).not.to.equal(secondjoke.data.value);
    });

    it('should get 200 status code', async function () {
        const statusCode = await jokesApi.getRandomJoke();

        expect(statusCode.status).equal(200);
    });

    it('should get response with https://api.chucknorris.io/jokes base url', async function () {
        const baseUrl = await jokesApi.getRandomJoke();

        expect(baseUrl.data.url).to.contain('https://api.chucknorris.io/jokes');
    });
  });
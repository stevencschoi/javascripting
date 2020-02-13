const request = require('request');
// const fs = require('fs');
const query = process.argv[2];

const url = 'https://api.thecatapi.com/v1/breeds/';

// const catFetcher = (url, (error, response, body) => {
const catFetcher = (url, query) => {
  request(url, (error, response, body) => {
    const data = JSON.parse(body);
    const values = Object.values(data);

    for (const value of values) {
      if (value.name === query) {
        console.log(value);
      }
    }
  });
};

catFetcher(url, query);


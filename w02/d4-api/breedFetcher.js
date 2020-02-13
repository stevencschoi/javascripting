const request = require('request');
// const fs = require('fs');
const query = process.argv[2];

const url = `https://api.thecatapi.com/v1/breeds/search?q=${query}`;

// const catFetcher = (url, (error, response, body) => {
const catFetcher = (url, query) => {
  request(url, (error, response, body) => {
    const data = JSON.parse(body);
    const values = Object.values(data);

    if (error) {
      console.error("Error: ", error);
    } else if (!data[0]) {
      console.log("Breed does not exist.");
    } else {
      console.log(data[0].description);
    }
  });
};

catFetcher(url, query);


const request = require('request');
const fs = require('fs');

const url = 'https://api.thecatapi.com/v1/breeds/search?q=sib';

// print body to the terminal

// const catFetcher = (url, (error, response, body) => {
const catFetcher = (url, query) => {
  request(url, (error, response, body) => {
    const data = JSON.parse(body);
    console.log(data);
  });
};

catFetcher(url);


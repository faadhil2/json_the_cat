const myArgs = process.argv.slice(2);
const request = require('request');

const breed = myArgs[0];


request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
  if (error) {
    console.log('error:', error); // Print the error if one occurred
  }

  const data = JSON.parse(body);
  if (data[0] === undefined) {
    console.log("Sorry, the breed was not found");
  } else {
    console.log(data[0].description);
  }
});


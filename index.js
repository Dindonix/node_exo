require('dotenv').config();

const name = process.env.MY_NAME;
const city = process.env.CITY;
const language = process.env.LANGUAGE;

console.log(`I am ${name}, wilder in ${city}, and I love ${language}`);
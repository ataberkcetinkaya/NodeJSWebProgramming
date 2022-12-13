const url = require('node:url'); //more details in node website

let myUrl = new URL('https://www.google.com/search?q=hello+world'); //URL info object

//console.log(myUrl);
console.log(myUrl.searchParams); //URLSearchParams { 'q' => 'hello world' }
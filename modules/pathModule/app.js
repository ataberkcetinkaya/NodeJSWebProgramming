const path = require('node:path'); //more details in node website

let result = path.resolve('app.js'); // C:\Users\user\pathModule\app.js

result = path.extname('app.js'); // .js

result = path.parse(__filename); //object with all the path details

console.log(result);
const fs = require('node:fs');

let theSystem = fs.readdirSync('./'); //gets the files in the current directory

let theSystem2 = fs.readdirSync('./', { withFileTypes: true });

// theSystem.forEach(file => {
//     console.log(file);
// })

console.log(theSystem2);

console.log('--------------------------------------------------------------------------------');

const theFiles = fs.readFileSync('./thisNote.txt', 'utf8'); //reads the file and returns a string

console.log(theFiles);  

//fs can be used to create, read, update, delete files
//an example usage for fs is getting a request and sending a response w an html file mb...

console.log('--------------------------------------------------------------------------------');

fs.writeFile("test.txt", "testing", function (error) { //creates a file and writes to it
    if(error) {
        console.log(error);
    } else {
        console.log("File created successfully");
    }
});

//fs.appendFile >> appends to a file, not deleting the previous content

//fs.unlink >> deletes a file

//fs.rename >> renames a file
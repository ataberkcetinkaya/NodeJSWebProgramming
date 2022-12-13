let firstName = "Ataberk";

function sayHello() {
  return "hello";
}

//module.exports.firstName = firstName; //export firstName - first one is the name of the variable that calling on the other file
//module.exports.sayHello = sayHello; //export sayHello

module.exports = { //to export multiple variables w only their original names
    firstName,
    sayHello
}
//for (var i = 1; i <= 10; i++) {
//    console.log(i);
//}
//console.log("Hello");

//var name = "Batman";

//console.log("Hello " + name);

function helloWorld(){
    var greeting = "Hello Hello!";
    alert(greeting);
}
//Call the function
helloWorld();

function add (a, b){
    return a + b;
}
console.log(add(4, 5));
//
//
//
//

//USING AN ANNOMYOUS FUNCTION Because function(a, b) does not have a name - HAS 1 PURPOSE
var otherFunction = function (a, b) {
    return a + b;

    console.log(otherFunction(4, 5));
}

function yourName(name) {
    return "Hello " + name;
}
console.log(yourName("Baba Booey"));
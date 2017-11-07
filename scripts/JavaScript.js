//for (var i = 1; i <= 10; i++) {
//    console.log(i);
//}
//console.log("Hello");

//var name = "Batman";

//console.log("Hello " + name);

//function helloWorld(){
//    var greeting = "Hello Hello!";
//    alert(greeting);
//}
////Call the function
//helloWorld();

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

function updateDiv() {
    var outputString = "Hello, Hello. Welcome to my page";
    document.getElementById("sectionOne").innerHTML = "<p>" + outputString + "<p>";
}

function swap() {
    var imageSrc = document.getElementById("swapImage").src;
    
    if (imageSrc.includes("JesseGrinding")) {
        document.getElementById("swapImage").src = "images/WCC.jpg";
    }
    else {
        document.getElementById("swapImage").src = "images/JesseGrinding.jpg"
    }
}

function printArray() {
    var favFoods = ["Pizza", "Strip Steak", "Chocolate Gelato"];
    var outputText = "<ul>";

    for (i = 0; i < favFoods.length; i++) {
        outputText += "<li>" + favFoods[i] + "</li>";
    }
    outputText += "</ul>";
    document.getElementById("sectionTwo").innerHTML += outputText;
}
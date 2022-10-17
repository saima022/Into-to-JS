const prompt = require("prompt-sync")();
// console.log(232);

// var a = prompt("Enter your number: ");
// // console.log("Hello JS");
// console.log("This is my output", a);
var a = parseInt(prompt("Enter your first number: "));
// console.log(a);
var b = parseInt(prompt("Enter your second number: "));
// console.log(b);

var result, choice;
choice = prompt("Enter your choice for mathematical operation: ");
if(choice==1){
    result = a+b;

}
 else 
 {
    console.log("Enter your choice correctly");
 }

console.log("result: ", result);
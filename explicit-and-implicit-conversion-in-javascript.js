/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/


let result = "5" - 2; //this works; the "5" string is converted to a number data type due to type coercion.
console.log("The result is: " + result);

let isValid = Boolean("false"); //"false" is a string, so it is truthy, therefore the function will return "This is valid!"
if (isValid) {
    console.log("This is valid!");
}

let age = "25";
let ageToNumber = Number(age); //ageToNumber variable converts age, which is a string, to a number using the Number() function.
let totalAge = ageToNumber + 5;
console.log("Total Age: " + totalAge);

//Explicit Example
let firstNumber = 3;
let stringNumber = "2";
console.log(typeof stringNumber); // stringNumber ("2") is a string.
let secondNumber = Number(stringNumber);
console.log(secondNumber); // stringNumber ("2") was converted to a number (2) using Number() function.
console.log(firstNumber + secondNumber);

//Implicit Example
if ("implicit example") {
   console.log("This is truthy!"); // This will run because a string is truthy.
}
if (0) {
   console.log("This is falsy."); // This won't run because zero is falsy.
}
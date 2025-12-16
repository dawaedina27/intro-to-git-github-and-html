// 1. What are the two recommended keywords for declaring variables in JavaScript, and when should each be used?
console.log("let and const")
console.log("let is used for changing values")
console.log("const is used for unchanging/constant value")
//eg
let name = "Hana"
name =" Patrick"
console.log(name)

const price = 1000
//price = 1500 // gives an error because the value can not be changed
console.log(price)


//2. Why is the var keyword discouraged in modern JavaScript?
console.log("It's because of its function scoping (var is old version or it has no limits to variables")

//3. Write a valid variable name following the camelCase convention for storing a customer's phone number.
let customerPhoneNumber = +256773980929;

//4. What will happen if you try to name a variable starting with a number, like 9lives?
console.log("JavaScript will throw a syntax error, and the code will not run.")

//5. List all five primitive data types in JavaScript.
console.log("String")
console.log("Number")
console.log("String")
console.log("Undefined")
console.log("null")

//6. What value does a declared but unassigned variable hold?
console.log("Undefined")
//eg
let name1;


//7. What is the difference between undefined and null?

console.log("undefined - This variable exists, but no value has been assigned yet")
//Example:

let x;


console.log("null - Set intentionally by the developer. Means: “This variable has no value on purpose”")

//Example:

let y = null;

//8. Write code to declare a constant variable called earthGravity and assign it the value 9.81.

const earthGravity = 9.81;

//9. How do you check the data type of a variable in JavaScript?

console.log("You check the data type of a variable in JavaScript using the typeof operator.")


//Example:

let value = 42;
console.log(typeof value);

//10. What is the quirk when checking the type of null using the typeof operator?

console.log("The quirk is that typeof null returns object, not null")

//Example:
let name3 = null
console.log(name3)

typeof null; // "object"







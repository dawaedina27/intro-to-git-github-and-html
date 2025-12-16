
console.log("Question:", 1);
// This is a single line comment

console.log("// This is for single line comment");

/* This is a multiple line comment */

console.log("/* */ This is a multiple lines comment.");



//Declare variables with let and log them.
// let allows you to declare a variable that can change later.
console.log("Question:", 2);
console.log("Hello from JavaScript!");

let firstName = "Dawa"
let firstFullName = "Dawa Edina Hillary";
let age = 50;
let location = "Rhino Camp";
let isMentee = true;
let isStudent = false;

console.log(firstName);
console.log(age);
console.log(isMentee);
console.log(firstFullName);
console.log(isStudent);


console.log("Question:", 3);

//Using const for Immutable Values
//const is used when you do not want the variable to be reassigned or changed.
//const does NOT make objects or arrays immutable
// const does NOT make objects or arrays immutable. It only prevents reassignment, not internal changes.

const numbers = [1, 2, 3, 4, 5];
numbers.push (6);

const PI = 10.93679;
const country = "South Sudan";
const isRegistered = true;
const notRegistered = false;

console.log(PI);
console.log(country);
console.log(notRegistered);
console.log(isRegistered);
console.log(numbers);



console.log("Question:", 4);
//Checking Data Types
//Use typeof to identify basic types.
//typeof that tells you the type of a value


let lastName = "Hillary";     // this is a string data type
let phoneNumber = '0770000000'; // this is a number
let notStudent = true;     // This is a boolean (true or false)
let score;                // this is undefined
let person = null;        // this is null. typeof null returns "object"
let arrayNumbers = [1, 2, 3];  // this is array. Arrays also return "object"
let user = { id: 1 };     // object


console.log(typeof lastName);
console.log(typeof phoneNumber);
console.log(typeof notStudent);
console.log(typeof score);
console.log(typeof person);
console.log(typeof arrayNumbers);
console.log(typeof user);




console.log("Question:", 4);
//String Data Type
//Concatenate and manipulate strings.

let firstName1 = "Juma";
let secondName = "Moses"
let lastName1 = "Charles";



let fullName1 = firstName1 + " " + secondName + " " + lastName1;
console.log(fullName1);


console.log("Question:", 4);
//Number Data Type
//Perform basic arithmetic with numbers.


//declare some variables

let a = 30;
let b = 10;
//Addition
let add = 6+10;
let add1 = a+b;
let sum = 20+a;

console.log(add);
console.log(add1);
console.log(sum);

//substraction
let subs = 100-30;
let subs1 = 80-a;
let diff = a-b;

console.log(subs);
console.log(subs1);
console.log(diff);


//Multiplication

let product = a*2;
let prod = b*a;
let prod1 = 2*8;

console.log(product);
console.log(prod);
console.log(prod1);

//Division
let division = a/b;
let division1 = 100/b;
let division2 = b/2;


console.log(division);
console.log(division1);
console.log(division2);



console.log("Question:", 5);
//Boolean Data Type
//Create booleans and use logic.

let isNational = true;
let isGraduated = false;
let child = 20;
let isAdult = child >= 20;  // true
let isMinor = age < 20;   // false

console.log(isAdult);
console.log(isMinor);
console(isNational);
console(isGraduated);


console.log("Question:", 6);

//Undefined vs Null
//Compare undefined and null values.

//undefined
let city; // declared but not assigned
console.log(city);           // undefined
console.log(typeof city);    // "undefined"


//null
let town = null; // explicitly no value
console.log(town);             // null
console.log(typeof town);      // "object" (this is a JS quirk)



//Using typeof Operator
// Explore typeof, including typeof null.

let value = 42;

if (typeof value === "number") {
    console.log("This is a number!");
}
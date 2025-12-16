console.log("Day Two JavaScript Assignment");

console.log("DAY:", 2);


console.log("Challenge:", 1);
// Question 1: String Concatenation Challenge
const customerName = "Agnes";
const region = "Central";
const item = "Sugar";

const details = "Customer: " + customerName + " | Region: " + region + " | Item: " + item;
console.log(details);



console.log("Challenge:", 2);
// Question 2: Template Literal Practice

const studentName = "Ken";
const registrationNumber = "AAA020";
const course = "IT";

const studentDetails = `Student: ${studentName} | registrationNumber: ${registrationNumber} | Course: ${course}`;
console.log(studentDetails);


console.log("Challenge:", 3);
// Question 3: Type Checking and Conversion
const num1 = 123;
const num2 = "456";
const num3 = "";


console.log("Type of num1:", typeof num1);
console.log("Type of num1:", typeof num1);
console.log("As number:", Number(num1));
console.log("As string:", String(num2));
console.log("Boolean conversion of empty string:", Boolean(num3)); 
console.log("Boolean conversion of non-empty:", Boolean("hello")); 


console.log("Challenge:", 4);
// Question 4: String Method Challenge
let originalString = "  hello world  ";

console.log("Trimmed String:", originalString.trim());
console.log("Convert String to Lowercase:", originalString.trim().toLowerCase());
console.log("Convert String to Uppercase:", originalString.trim().toUpperCase());


let string = originalString.trim().split(" ");
console.log("Split into words:", string);

console.log("Includes 'world'? ->", originalString.includes("world"));
console.log("Replace 'world' with 'Everyone':", originalString.replace("world", "Everyone"));
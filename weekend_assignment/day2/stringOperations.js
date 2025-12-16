// 26. What is string concatenation?
console.log("26. What is string concatenation?");
console.log("String concatenation is the process of joining two or more strings together to form a single string.");

let firstName = "Dawa";
let secondName = "Edina";
let thirdName = "Hillary";

let fullName = firstName + " " + secondName + " " + thirdName;
console.log(fullName)


// 27. Write code to concatenate "Karibu" and "Groceries" using the + operator.
console.log("27. Write code to concatenate Karibu and Groceries using the + operator.")

let companyFirstName = "Karibu";
let companySecondName = "Groceries";
let companyFullName = companyFirstName + " " + companySecondName;
console.log(companyFullName)

// 28. What are template literals and why are they preferred over string concatenation?

//Template literals are a modern JavaScript feature for creating strings more easily and readably. They use backticks (`) instead of quotes.

//Example
let hisName = "Moses";
let greeting = `Hello, ${hisName}!`;
console.log(greeting)


// 29. Rewrite this using template literals: 'My name is ' + firstName + ' and I am ' + age + 'years old.'

let myFirstName = "Jane";
let myAge = 30;
let mydetails = `My name is ${myFirstName}, I am ${myAge} years old.`;
console.log(mydetails)

// 30. What is string interpolation?
console.log("0. What is string interpolation?")
console.log("A feature provided by template literals.")

console.log("It’s the act of inserting variables or expressions into a string. Uses ${} inside a template literal")

//Example:

const name = "Alex";
const message = `Hello ${name}`;

// 31. How do you find the length of a string?

//In JavaScript, you find the length of a string using the .length property.

// Example
let text = "Hello";
console.log(text.length); // 5

//OR
"JavaScript".length;      // 10
"".length;                // 0
"Hello World".length;     // 11 (space counts)

//It’s a property, not a function (no parentheses) text.length() wrong


// 32. Write code to access the first character of the string "JavaScript".
        let module = "JavaScript";
        let firstChar = module[0];
        let firstChar1 = module[4];
        console.log(firstChar)
        console.log(firstChar1)

// 33. Write code to access the last character of any string stored in a variable called myString.
let myString = "BasicS"
let lastChar = myString[myString.length - 2];
console.log(lastChar)
// 34. What does the .toUpperCase() method do?
//The .toUpperCase() method converts all letters in a string to uppercase.

//Example
let txt = "JavaScript";
let result = txt.toUpperCase();

console.log(result); // "JAVASCRIPT"

// 35. Write code to convert "beans" to uppercase.
let produce = "beans";
let converted = produce.toLocaleUpperCase();
console.log(converted)
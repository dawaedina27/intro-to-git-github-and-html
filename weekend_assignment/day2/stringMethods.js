//36. What does the .trim() method do, and why is it essential for user input?

// The .trim() method removes whitespace from both ends of a string. That includes: 1. spaces 2. tabs 3. newlines

//Example
let input = "   hello world   ";
console.log(input)//"   hello world  "

let cleanInput = input.trim();

console.log(cleanInput); // "hello world"

//.trim() cleans user input so comparisons, validation, and storage work correctly and predictably.


// 37. How do you check if a string contains a specific substring?
//In JavaScript, the recommended way is to use the .includes() method.

let message = "Hello JavaScript";

console.log(message.includes("Java")); // true
console.log(message.includes("java")); // false (case-sensitive)

// 38. Write code to check if the string "Karibu Groceries Ltd" includes the word "Groceries".

let fullString = "Karibu Groceries Ltd"
console.log(fullString.includes("Groceries"))

// 39. What does the .split() method do?

//The .split() method in JavaScript divides a string into an array of substrings based on a specified separator.

// 40. Write code to split "Beans,Maize,Cowpeas" into an array using the comma as a separator.
let text = "apple,banana,cherry";
let fruits = text.split(",");
console.log(fruits); // ["apple", "banana", "cherry"]

// Examples with different separators
let sentence = "Hello world";
console.log(sentence.split(" ")); // ["Hello", "world"]

let chars = "JavaScript".split("");
console.log(chars); // ["J","a","v","a","S","c","r","i","p","t"]


//You can limit the number of splits:

let data = "a,b,c,d";
console.log(data.split(",", 2)); // ["a", "b"]
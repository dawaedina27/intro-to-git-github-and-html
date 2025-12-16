// 41. What are the only two values a Boolean data type can hold?

//true or false are the only Boolean values in JavaScript.


// 42. What is the difference between == and ===?

//1. == (Equality) Compares values only it Performs type coercion if the types are different

console.log(5 == "5");   // true, string "5" is converted to number 5
console.log(0 == false); // true, false is converted to 0

// 2. === (Strict Equality) Compares both value and type, No type coercion occurs

console.log(5 === "5");  // false, number !== string
console.log(0 === false); // false, number !== boolean

// 43. Why is strict equality (===) recommended over loose equality (==)?
//Because === compares both value and type, avoiding type coercion and preventing unexpected bugs.
//Strict equality (===) is recommended over loose equality (==) because it prevents automatic type coercion, making your code safer, clearer, and more predictable.

// 44. Write code to check if 5 is strictly equal to "5". What will be the result?
    console.log(5 === "5");
// Result: false

// 45. Write code to check if 1000 is greater than or equal to 1000.
   console.log(1000 >= 1000);
// Result: true

//21. How do you convert the string "1500" into a number type?

console.log(Number("1500"));

//22. What is the difference between parseInt() and parseFloat()?

//We use parseInt when using whole numbers like 1 and 2
// PasreFloat is for decimals

let number = 2.1;
console.log(parseInt(number));
console.log(parseFloat(number));

//23. Write code to convert the number 2500 into a string.
console.log(String(1500));

//24. What are the six falsy values in JavaScript?
//The six falsy valuse in javascript are 0, "", undefined, null, NaN, and false
//eg
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));
console.log(Boolean(false));


//25. How would you check if a value is truthy or falsy?

//Checking falsy values
console.log(Boolean(false));
console.log(Boolean(""));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));
console.log(Boolean(false));


//checking for truthy value
console.log(Boolean("false"));
console.log(Boolean("0"));
console.log(Boolean(1));
console.log(Boolean([]));
console.log(Boolean("null"));
console.log(Boolean("false"));

console.log("Day 3 Exercise: Part:",1);
console.log("Challenge:" ,1);

console.log("Checking true boolean");
// Declaring tonnage in kgs
let procurementTonnage = 1200;

// Check whether tonnage is greater than 1000 kg. since the procurment Tonnage is greater than 1000, the boolean will be true
let meetsRequirement = procurementTonnage > 1000;

// Log the boolean result - which is "true"
console.log(meetsRequirement);


console.log("Checking false boolean");
// declare the tonnage in kgs
let procurementTonnage1 = 900;

// check if it meets the minimum requirement (1000 kgs)
let meetsRequirement1 = procurementTonnage1 > 1000;

// log the boolean result. The results should be false because the procurementTonnage is less than 1000kgs
console.log(meetsRequirement1);



console.log("Day 3 Exercise: Part:",1);
console.log("Challenge:",2);

// string
let costStr = '5000'; 
 // number
let costNum = 5000;  

//Test with ==

console.log(costStr == costNum); 
// The Output is true
//Because the == operator, converts strings to numbers before comparing



//Test with ===
console.log(costStr === costNum);

//The output is false beacuse the === operator checks both type AND value


//'5000' → string, 5000 → number. They are not the same type, so === returns false.

console.log("Why === Is Safer for KGL");
console.log("Accidental acceptance of wrong data types", "Mixing strings and numbers in calculations", "Silent bugs caused by JavaScript auto-converting values", "security issues where incorrect types pass validation");
console.log("Using === makes KGL more reliable, secure, and predictable.");



//Part 2

console.log("Day 3 Exercise: Part:",2);
console.log("Challenge:",3);
console.log("Complex Validation");
//write an expression to validate a recording using the && operator.
//> dealerName length must be >= 2.
// > costUgx must be >= 10000(5 digits)



//Checking for Valid recordings

// define the variabl
let dealerName = "Dawa"; 

// define the variable 
let costUgx = 10100;


if (dealerName.length >= 2 && costUgx >= 10000) {
    console.log("Recording is valid");
} else {
    console.log("Recording is invalid");
}


//Checking for Invalid recordings

// define the variabl
let dealerName1 = "Dawa"; 

// define the variable 
let costUgx1 = 1100;


if (dealerName1.length >= 2 && costUgx1 >= 10000) {
    console.log("Recording is valid");
} else {
    console.log("Recording is invalid");
}

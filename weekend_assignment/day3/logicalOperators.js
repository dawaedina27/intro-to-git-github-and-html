// 51. What does the AND (&&) operator do?
// The AND (&&) operator returns true only if both conditions are true; otherwise, it returns false.

// 52. Write a logical expression that checks if both stock > 0 AND price > 0 are true.
let stock = -10;
let price = 100;
console.log(stock > 0 && price > 0);

// 53. What does the OR (||) operator return?

//The OR (||) operator returns true if at least one condition is true; otherwise, it returns false.


// 54. Write a logical expression using OR to check if a produce source is either "Individual Dealer" OR "KGL Farm".

let produceSource = "";


console.log(produceSource === "Individual Dealer" || produceSource === "KGL Farm")

// 55. What does the NOT (!) operator do?

// The NOT (!) operator reverses a Boolean value — it turns true into false and false into true.

// 56. Write code using the NOT operator to check if a string is NOT empty.
let theString = ""
let theString1 = "Abc"
console.log(!theString === "")
console.log(theString1 !== "")
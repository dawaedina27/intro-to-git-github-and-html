let procurmentDetails = [
    {dealerName: "Kabene", supply: "Oranges", buyer: "KGL"},
    {dealerName: "Habtamu", supply: "Apples", buyer: "KGL"},
    {dealerName: "Kabene", supply: "Oranges", buyer: "KGL"},
    {dealerName: "Rashid", supply: "Mangoes", buyer: "KGL"},
    {dealerName: "Kabene", supply: "Oranges", buyer: "KGL"},
    {dealerName: "Dawa", supply: "Bananas", buyer: "KGL"}
]

let uniqueDealer = new Set();
procurementRecords.forEach(record =>{
    if(record.buyer==="KGL"){
        uniqueKGLdealers.add(record.dealerName)
    }
})

console.log(uniqueDealer.size)
uniqueDealer.add("Simon")
console.log(uniqueKGLdealers.size)


let kglPrices = new Map();

kglPrices.set('Bananas', 7_000);
kglPrices.set('Oranges', 3000);
kglPrices.set('Apples', 3000);
kglPrices.set('Carrots', 3000);

console.log(kglPrices);
let retrievedProduce = "Bananas";
let price = kglPrices.get(retrivedProduce);
console.log(`${retrievedProduce} is $${price}`)

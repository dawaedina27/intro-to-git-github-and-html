const sales = [
  {amount: 1200 },
  { amount: 850 },
  { amount: 430 },
  { amountPaid: 620 }
];

const totalRevenue = sales.reduce((total, sale) => total + sale.amountPaid, 0);

console.log("Total revenue collected:", totalRevenue);
const { calculateConsumption, compareCosts } = require('./src/functions');
const { products } = require('./src/products');

console.table(compareCosts(3500, products));
console.table(compareCosts(4500, products));
console.table(compareCosts(6000, products));
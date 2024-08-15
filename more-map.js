const friends = ['Tom Hanks', 'Tom Cruise', 'Tom Solaiman'];
const fLengths = friends.map(friend => friend.length);
// console.log(fLengths);

const products = [
  { name: "water bottle", price: 50, color: "yellow" },
  { name: "water glass", price: 5, color: "water" },
  { name: "mobile phone", price: 15000, color: "black" },
  { name: "smart watch", price: 3000, color: "black" },
  { name: "sticky note", price: 30, color: "pink" },
];
const productNames = products.map(product => product.name);
console.log(productNames);
const pPrices = products.map(product => product.price);
// products.map(product => console.log(product));
products.forEach(product => console.log(product));
// console.log(pPrices);

const numbers = [5, 13, 7, 41, 30, 5, 2, 19];
const bigNumbers = numbers.filter(number => number > 20);
const smallNumbers = numbers.filter(number => number < 10);
// console.log(smallNumbers);

const products = [
  { name: "water bottle", price: 50, color: "yellow" },
  { name: "water glass", price: 5, color: "water" },
  { name: "mobile phone", price: 15000, color: "black" },
  { name: "smart watch", price: 3000, color: "black" },
  { name: "sticky note", price: 30, color: "pink" },
];

const expensive = products.filter(product => product.price > 100);
// console.log(expensive);
const blacks = products.filter(product => product.color == 'black');
console.log(blacks);
const whiteItem = products.find(product => product.color == 'black');
console.log(whiteItem);
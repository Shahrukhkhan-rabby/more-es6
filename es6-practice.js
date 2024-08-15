// 1. let const
// 2. template string
// basic
const names = "Rocky";
const greeting = `Assalamu Alaiqum, ${names}!`;
console.log(greeting);

// multi-line string
const message = `This is multi-line
string that spans
across several lines.`;
console.log(message);

// Expression Embedding
const a = 5;
const b = 10;
const result = `The sum of ${a} and ${b} is ${a + b}.`;
console.log(result);

// Tagged Templates
function tag(strings, ...values) {
    console.log(strings);
    console.log(values);
}
const num = 10;
const information = tag`The number is ${num}.`;

// Nesting Templates 
const nested = `Result: ${`The sum is ${a + b}`}`;
console.log(nested);


// 2. a: use variable
// 2. b: use object Property
// 3. arrow function
// 3. a: with one parameter. will return the number after dividing by 5
const divideByFive = (num) => num / 5;
console.log(divideByFive(75));

// 3. b: with one parameters. will add two to each number and then multiply the result.
const proNumber = (num) => {
    const added = num + 2;
    return added * 3;
};
console.log(proNumber(5));

// 3. c: three parameters. will multiply all three parameters
const multiplyThree = (a, b, c) => a * b * c;
console.log(multiplyThree(2, 3, 4));

// 3. d: with one parameters.but it will multiline arrow function and add two to each number and then multiply the result.
const processNumber = (num) => {
    const added = num + 2;
    const result = added * 3;
    return result;
}
console.log(processNumber(5));


// 4. [home work]: javascript function declaration vs arrow function
// function declaration
function add(a, b) {
    return a + b;
}
console.log(add(2, 3));

// arrow function
const aadd = (a, b) => a + b;
console.log(aadd(2, 3));

// 5. array of numbers and then map to get each elements multiplied by 5. must use arrow function
const numbers = [1, 2, 3, 4, 5];
const multipliedByFive = numbers.map(num => num * 5);
console.log(multipliedByFive);

// 6.[challenging] numbers of array.get odd numbers by using filter with arrow function
const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const oddNumbers = numbers.filter(num => num % 2 !== 0);
console.log(oddNumbers);

// 7.[challenging] array of objects(e.g.products).use find to get the object with price 5000.
const products = [
    { name: 'Laptop', price: 76000 },
    { name: 'Smartphone', price: 35000 },
    { name: 'Smart Watch', price: 5000 },
];
const productWithPrice5000 = products.find(product => product.price === 5000);
console.log(productWithPrice5000);
// 8. You have an object. Now use destructuring create a simple variable of any property of the object.
const person = {
    name: 'Alice',
    age: 30,
    city: 'New York'
}; 
const { name } = person;
console.log(name);
// 9.[challenging] You have an array.Now use destructuring create a simple(or more) variable to get the third element of the array in a variable called 'three'
const array = [1, 2, 3, 4, 5];

const [, , three] = array;

console.log(three);
// 10. [optional] just write a function with thee parameters and the last parameter will have a default parameter with value 7 this function will take three parameters and will return the sum of all three parameters.
function sum(a, b, c = 7) {
    return a + b + c;
}
console.log(sum(1, 2));
console.log(sum(1, 2, 3));



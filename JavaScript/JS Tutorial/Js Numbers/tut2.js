// Js Number methods

// returns number to string

let x = 123
x = x.toString();
console.log(`The type of ${x} is : ` + typeof(x));

// toFixed 

let y = 6.548933;
y = y.toFixed(4);
console.log(y);

// toPrecision 

let z = 9.564;
console.log(z.toPrecision());
console.log(z.toPrecision(2));
console.log(z.toPrecision(3));
console.log(z.toPrecision(4));

// ParseInt()

let a = "My roll number is 1";

console.log(parseInt(a));

// javascript epsilon  - it is the number between 1 and the smallest floating point number greater than 1.

let b = Number.EPSILON;
console.log(b);

let c = Number.MIN_VALUE;
let d = Number.MAX_VALUE;
console.log(c,d);
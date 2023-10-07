// This format stores numbers in 64 bits, where the number (the fraction) is stored in bits 0 to 51, the exponent in bits 52 to 62, and the sign in bit 63:

// Floating point precision

let x = 0.1 + 0.2;
console.log(x);   // 0.30000000000000004

let y = (0.1 * 10 + 0.2 * 10) / 10;
console.log(y);   // 0.3

var a = 10;
var b = 20;
var c = '10';
console.log(a + b + c);

// NaN = Not a Number;

console.log(12 / "santra");
console.log(typeof ((12 / "santra")));

let d = NaN;
let e = 3;
let f = "s";
console.log(d + e, d + f);

// Infinity

let g = 65 / 0;
console.log(g);

// toString method changes the base of the number

let myNum = 16;

console.log("to binary: " + myNum.toString(2));
console.log("to base 12: " + myNum.toString(12));
console.log("to base 16: " + myNum.toString(16));
console.log("to base 32: " + myNum.toString(32));

// Js Objects

let h = 123;
let i = new Number(123);

console.log(h == i);
console.log(h === i);
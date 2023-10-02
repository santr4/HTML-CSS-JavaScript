// There are total 8 datatypes

// NNBBSSUO - Number, null, Boolean, BigInt, String, Symbol, Undefined, Objects

// Numbers

let x = 7;
let a = 8.5;

// strings 

let b = "aaranyak";

// booleans

let c = true;

// objects

let obj = {
    boy: 'aaranyak',
    girl: 'shreya'
}

console.log(obj['girl']);

// array object 

const arr = [1, 2, 3, 4];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}


// Date object

const date = new Date("2023-10-02");
const targetDate = new Date("2023-10-02");

if (date.getTime() == targetDate.getTime()) {
    console.log("Happy Gandhi Jayanti");
}

let d = 16 + "santra";
console.log(d);

let e = 3 + 4 + "santra";
console.log(e);

let f = "santra" + 3 + 4;
console.log(f);

// Js types are dynamic

let g = "santra";

g = 8.99;

console.log(g);

let h = 7;
let i = 8.9;
let j = h + i;
console.log(j);

// exponential notation

let k = 23e2;
console.log(k);

// All JavaScript numbers are stored in a a 64-bit floating-point format.

let l = BigInt('1234567891234567789');
console.log(l);

// typeof operator

let m = 6.57;
console.log(typeof (m));

// Js Booleans

let n = 8;
let o = 9;
console.log(n == o);

// undefined vs null

let p = null;
let q;

console.log(p, q);
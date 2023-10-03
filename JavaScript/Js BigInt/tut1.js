// ** BigInt

// ** to create a bigint just append n to the last.

let x = 99999999999;
let y = 99999999999n;

console.log(typeof(x));
console.log(typeof(y));

let a = 95748502859340n;
let b = 483592034529345n;

let c = a * b;
console.log(c);
console.log(typeof(c));

let d = 100n;
let e = Number(d)/2;
console.log(e);

// rounding can compromise security

console.log(9007199254740992 == 9007199254740993);

let f = Number.MAX_SAFE_INTEGER;
let g = Number.MIN_SAFE_INTEGER;
console.log(f,g);

console.log(Number.isSafeInteger(12345678901234567890));
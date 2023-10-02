// ** JavaScipts Assignments


let x = 10;
x += 5;

console.log(x);

let y = "aaa";
let z = "a";
console.log(y - z);  // NaN -> not a number

// shift operator.
let w = 10;

w >>= 2;

console.log(w);

// bitwise and operator 

let a = 100;

a &= 5;
console.log(a);

// nullish assignment operator

let b = null;

let c = 7;

b ??= 100;

c ??= 100;

if (b == 100) {
    console.log("b was previously null");
}

else {
    console.log("b was not previously null");
}

if (c == 100) {
    console.log("c was previously null");
}
else {
    console.log("c was not previously null");
}
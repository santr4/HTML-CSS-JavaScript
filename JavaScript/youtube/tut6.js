// ** operators and expressions

// all the below 3 lines are valid programs
// 77;
// "harray bhai";
// true;

// ** arithmatic operators

let a = 5;
var b = 6;

console.log("a+b = ",a+b);
console.log("a-b = ",a-b);
console.log("a*b = ",a*b);
console.log("a/b = ",a/b);
console.log("a**b = ",a**b);
console.log("a%b = ",a%b);

let c = 7;

console.log(c--);
console.log(c);

console.log(c++);
console.log(c);

// ** assignment operators

let d = 0;
d += 4;

console.log(d);

// ** comparision operators

let comp1 = 5;
let comp2 = "5";

console.log(comp1 == comp2);
console.log(comp1 === comp2);  // === this operator is checks if both value and datatype are equal

// ** logical operators

let e = 7;
let f = 8;

if(e == 7 && (f%2) == 0){
    console.log('both conditions are satisfied');
}

// ** comments

/* hello world,
I am back */


/*
// for loops

// we have to find the sum of first 10 natural numbers

let sum = 0;

for(let i = 1;i <= 10;i++){
    sum += i;
}

console.log(sum);

// for in loops

let obj = {
    'harry' : 0,
    'santra' : 100,
    'gaurav' : 99,
    'himanshu' : 98,
    'ansh' : 120
}

for(let b in obj){
    console.log(b);
}

for(let c in obj){
    console.log(obj[c]);
}
*/

// for of loop

let str = "aaranyak santra"

for (let d of str) {
    console.log(d);
}

let x = 10;
let s = 0;
for (var i = 0; i < x; i++) {  // if we use let with i then i is only for the block therefore we cannot run the console.log(i); we have to use var.
    s += i;
}

console.log(i);
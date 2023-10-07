// loops

// for in
const person = {
    fname: "john",
    lname: "doe",
    age: 25
}

let txt = "";
let txt1 = "";
for (let x in person) {
    txt += person[x] + " ";
    txt1 += x + " ";
}

console.log(txt);
console.log(txt1);
// for

let num = 10;
let sum = 0;
// sum of first 10 natural numbers

for (let y = 10; y > 0; y--) {
    sum += y;
}

console.log(sum);


const arr = [
    {
        "name": "aaranyak",
        "color": "black",
        "age": 20
    }
];

console.log(arr[0].name);

// for of

const arr1 = [1, 2, 3, 4, 5];

for (let z of arr1) {
    console.log(z);
}
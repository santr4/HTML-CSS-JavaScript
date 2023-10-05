// JavaScript Iteration

// for Each()

const arr = [45, 4, 9, 16, 25];
let text = "";
arr.forEach(myFunction);

function myFunction(val) {
    text += val + "\n";
}

console.log(text);

// simple iteration

const arr1 = [45, 4, 9, 16, 25];
let l = arr1.length;

for (let i = 0; i < l; i++) {
    console.log(arr1[i]);
}

// map function

const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFunction);

function myFunction(val) {
    return (val * 2);
}

console.log(numbers2);

// arrays.keys()

const arr2 = ["Banana", "Orange", "Apple", "Mango"];
const keys = arr2.keys();

for (let x of keys) {
    console.log(x);
}

for (let y of arr2) {
    console.log(y);
}
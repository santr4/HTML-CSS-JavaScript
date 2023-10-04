// ** Js array methods

// JS array length

const arr = ["BMW", "Mercedes", "Ferrari"];
let x = arr.length;

console.log(x);

// array to string

console.log(arr.toString());
console.log(arr.join("*"));

// pop and push

const arr1 = ["dog", "cat", "cow", "lion"];
arr1.pop();
console.log(arr1);
arr1.push("tiger");
console.log(arr1);

// shift

let arr2 = arr1.shift();
console.log(`First Element: ${arr2}`);
console.log("rest of the array: " + arr1);

// unshift

arr1.unshift("cat");
console.log(arr1);

// delete the arrays

let arr3 = ["rice", "dal", "vegetables"];
delete arr3[2];
console.log(arr3);

// Merging(concatenating arrays

let arr4 = arr3.concat(arr2);
console.log(arr4);

// flattening an array

let arr5 = [[1, 2], [3, 4], [5, 6]];
let arr6 = arr5.flat();
console.log(arr6);

// splicing and slicing

let arr7 = ["jan", "feb", "mar", "apr"];
let newArr = arr7.splice(3);
console.log(newArr);

console.log(arr7);
let newarr = arr7.slice(1);
console.log(newarr);
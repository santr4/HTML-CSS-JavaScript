// creating arrays

const cars = ["BMW","Mercedes","ferrari"];
const bikes = new Array("ninja","apache","bmw","yamaha");

console.log(cars,bikes);
console.log("my favourite bike is: " + bikes[1]);

// converting arrays to strings

const fruits = ["mango","apple","banana"];
console.log(fruits.toString());

// objects

const person = {
    name: "aaranyak santra",
    age: 20,
    hobbies: ["coding","reading books","finance","playing football","watching movies","vocabulary","general knowledge"]
};

let x = person.hobbies[2];
console.log(x);

const num = [1,2,3,445,3,2,33];
console.log(num.length);
console.log(num.sort());

// looping through the array

// try to find the sum of all integers in the array.

const arr = ["aaranyak",1,2,3,4,"santra",5];
let sum = 0;
for(const a of arr){
    if(Number.isInteger(a)){
        sum += a;
    }
}

console.log("the sum of the integers in the array: " , sum);

// adding array elements

fruits.push('guava');
console.log(fruits);

let a = fruits.length;
fruits[a] = 'strawberry';
console.log(fruits);


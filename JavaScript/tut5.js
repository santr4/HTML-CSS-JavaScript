// Practice Set - 1

// ** Q1

let a = "santra";
let b = 7;

console.log(typeof(a));
console.log(typeof(b));

console.log(a+b);

// ** Q2

console.log(typeof(a+b));

// ** Q3 - (we cant change the const object later.)

const c = {
    name : "santra",
    age : 20
}

// c = "aaranyak";  --> this will throw an error.

console.log(c) 

// ** Q4 - The object which is in relationship with the const can change which the const can tolerate but the const will not tolerate if any other object is forced on it.

const item = {
    name : 'apple',
    price : 560,
    weight : "1KG"
}

item['price'] = 600;
item['color'] = "red";

console.log(item);


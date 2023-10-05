// create a map

const fruits = new Map(
    [
        ["apples", 500],
        ["orange", 600],
        ["pomegranate", 800],
        ["mango", 1000]
    ]
);

console.log(fruits);

// set method

const animal = new Map();

animal.set("lion", "C");
animal.set("tiger", "C");
animal.set("cow", "H");
animal.set("crow", "O");

console.log(animal);

// get method

let x = animal.get("lion");
console.log(x);

// size property

console.log(animal.size);

// delete method

animal.delete("tiger");
console.log(animal);

console.log(animal.has("tiger"));

let txt = "";

animal.forEach(function (key, value) {
    txt += key + "," + value + " ";
})

console.log(txt);
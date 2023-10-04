// JavaScript Sorting

// sorting and reversing an array

const arr1 = ["banana","apple","orange","mango"];
console.log(arr1.sort());
console.log(arr1.reverse());

// Numberic sort

const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a,b){return (a-b)});  // ascending order

console.log(points);

points.sort(function(a,b){return (b-a)});

console.log(points);

// Fisher Yates Method to sort the array in random order

const p = [40, 100, 1, 5, 25, 10];

for(let i = p.length - 1;i > 0;i--){
    let j = Math.floor(Math.random() * (i+1));
    let k = p[i];
    p[i] = p[j];
    p[j] = k;
}

console.log(p);

// inbuilt function to take out min and max of an array.
var numbers = [3,67,-89,23,100,200,300,10];
console.log(Math.min.apply(null,numbers));
console.log(Math.max.apply(null,numbers));

// Home made method to find min and max

let arr = [3,67,-89,23,100,200,300,10];
let max = myArraymax(arr);
function myArraymax(arr){
    let len = arr.length;
    let max = -Infinity;
    while(len--){
        if(arr[len] > max){
            max = arr[len];
        }
    }
    return max;
}

console.log(max);

// for min use Infinity instead of -Infinity.

// sorting object arrays

const cars = [
    {type:"Volvo", year:2016},
    {type:"Saab", year:2001},
    {type:"BMW", year:2010}
];

let cars1 = cars.sort(function(a,b){return (a.year-b.year)});
console.log(cars1);
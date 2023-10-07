// ** JS array const.
// any array with const keyword cannot be reassigned.

// elements can be reassigned

const arr = ["Saab", "Volvo", "BMW"];
arr[0] = 7;

arr.push("aaranyak santra");

console.log(arr);

// const array is blocked scope

const arr1 = [1, 2, 3, 4, 5];

{
    const arr1 = ["himanshu", "anupam", "ansh", "gaurav", "prashant", "nanhe", "bharadwaj", "saumy", "arora", "deep", "katyan", "prateek"];
    console.log(arr1);
}

console.log(arr1);

// declared after initialization

arr2 = [1, 2, 3, 4, 5, 5, 6];
var arr2;

console.log(arr2);
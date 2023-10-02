// ** Functions - A JavaScript function is executed when "something" invokes it (calls it).

/* 

function name(parameter1, parameter2, parameter3) {
  // code to be executed
}

*/

// function return 
function myFunction(a,b){
    return a*b;
}
let x = myFunction(3,4);

console.log(x);

// function to convert celsius to fahrenheit

function toCelsius(x){
    return ((5/9)*(x-32));
}

let val = toCelsius(32);

console.log(val);

// variables initialized inside function are local to it only.

function myfunc(){
    let y = "santra";
    return y;
}

let z = "aaranyak" + " " + myfunc();
console.log(z);
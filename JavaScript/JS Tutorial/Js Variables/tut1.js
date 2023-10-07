// ** There are mainly three types of variables in js:

/*     1. var
       2. const
       3. let
*/

var x = 1;
let y = 6;
const z = 9;

y = 7;
var x = 8;

// const and let can't be re-declared only var can be re-declared.

console.log(x + y + z);

// global and local scope

let var1 = 10;

{
       let var1 = 2;
       console.log(var1);
}

console.log(var1);

var var2 = 11;

{
       var var2 = 2;
       console.log(var2);
}

console.log(var2);

// constant arrays

const cars = ['Audi', 'Mercedes', 'Buggati'];

cars.push('Ferrari', 'Lamborghini');

console.log(cars);
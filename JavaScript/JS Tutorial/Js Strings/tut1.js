let str = "aaranyak santra";
let l = str.length;

console.log(l);

// two ways to put single quote inside double quote

let s = "hi, I am 'aaranyak santra'. Nice to meet you!";
let t = "hi, I am \'aaranyak santra\'. Nice to meet you!";

console.log(s);
console.log(t);

// difference between == and ===

let x = "santra";
let y = new String("santra");

console.log(x==y); // checks value.

console.log(x===y); // checks both value and type.
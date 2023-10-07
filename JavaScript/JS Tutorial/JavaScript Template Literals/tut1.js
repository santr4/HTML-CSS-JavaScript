// Js template literals

// multiline strings

let txt = 
`hello
my name
is
aaranyak santra.`;

// variable substitutions

let firstname = "aaranyak";
let secondname = "santra";

let text = `Welcome ${firstname} ${secondname}!`;
console.log(text);

// Expression substitution

let price = 10;
let VAT = 0.25;

let total = `Total: ${(price * (1+VAT)).toFixed(2)}`;
console.log(total);
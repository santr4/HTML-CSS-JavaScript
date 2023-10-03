// String Search methods

let txt = "Hello! my name is Aaranyak Santra.";
console.log(txt.indexOf('Santra'));

console.log(txt.lastIndexOf('Santra.'));

let str = "hello world! my name is aaranyak santra.";
str = str.replace("aaranyak", "somu");

console.log(str);

let x = str.search("world!");
console.log(x);

let y = "I am a boy and I love my family";
console.log(y.match(/am/g));

let z = "hello world";
console.log(z.endsWith('world'));

let a = "my name is aaranyak santra";
a = a.split("");
console.log(a);

let b = "my name is aaranyak santra";
console.log(b.endsWith('name', 7));
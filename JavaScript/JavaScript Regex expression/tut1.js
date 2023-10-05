// string search with regular expression

let txt = "aaranyak santra is the best software engineer";
let n = txt.search(/software/i);
console.log(n);

// string replace with regular expression

let text = "visit Microsoft";
let x = text.replace(/microsoft/i, "Google");
console.log(x);

// using test method

let pattern = /z/;
let str = "hello world! my name is aaranyak santra";
console.log(pattern.test(str));

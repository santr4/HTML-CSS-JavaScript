// ** primitives and objects

// NNSSBBU - types of primitive datatypes.

let a = null;
let b = 54;
let c = "santra";
let d = Symbol("I am a Symbol");
let e = true;
let f = BigInt("235");
let g = undefined;

console.log(a,b,c,d,e,f,g);

// block of code.
{
    let h = BigInt("47");
    let i = BigInt("3");
    console.log(h+i);
}

let h = 76;

console.log(h);

// ** Objects - Non - primitive datatype

const item = {
    "himanshu" : "AI Engineer",
    "Gaurav": "Data Engineer",
    "Anupam": "Web Developer",
    "Yash": "IoS Developer",
    "prashant": "ml engineer",
    "ansh": "buisnessman",
    "saumy": "mathematician",
    "santra": 0
}

console.log(item["santra"])
console.log(item["ansh"])
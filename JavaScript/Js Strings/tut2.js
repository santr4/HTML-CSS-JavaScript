// ** String methods

let text = "my name is aaranyak santra";
console.log(text.slice(3,7));

console.log(text.slice(3));

console.log(text.slice(-15));

let x = "cricket, football, chess";
console.log("my favourite sport is: " + x.substring(9,17));

console.log(x.substr(0,7));

let y = "the best footballer in the world is messi";
let z = y.replace("messi","ronaldo");

console.log(z);

// the replace function is case sensitive, to remove that use /i

let b = y.replace("MESSI","aaranyak santra");
let a = y.replace(/MESSI/i,"neymar");

console.log(b);
console.log(a);

// use regular experssion /g to replace all the same words in the sentence

let str = "Yash Katyan is intelligent. Everyone know that he is an intelligent boy";
let str1 = str.replace(/intelligent/g,"bakchod");
let str2 = str.replaceAll("intelligent","v-guard");

console.log(str1);
console.log(str2);

let c = "Aaranyak Santra";
let d = c.toUpperCase(c);
console.log(d);

// concat function

var e = "aaranyak";
var f = "santra";
var g = e.concat(" " + f);
console.log(g);

let h = "   hello   ";
console.log(h.trim());

let i = "amrita vishwa vidyapeetham";
let char = i.charAt(1);
let char1 = i[1];
if(char ==  char1){
    console.log('true');
}
else{
    console.log('false');
}
// Objects in Js

const person = {
    FirstName: "Aaranyak",
    LastName: "Santra",
    weight: 80,
    height: '175 cm',
    fullName: function () {
        console.log(this.FirstName + " " + this.LastName);
    }
};

let name = person.fullName();
console.log(name);
"use strict";
class Invoice {
    constructor(c, d, a) {
        this.toJson = () => {
            return {
                "Client": this.client,
                "Detail": this.detail,
                "Amount": this.amount,
            };
        };
        this.client = c;
        this.detail = d;
        this.amount = a;
    }
}
const user = "Narin";
const input = document.querySelectorAll("input");
const circ = (d) => {
    return d * Math.PI;
};
let names = [];
names.push("Narin");
let age;
let gender;
let ninja;
ninja = [];
ninja.push("Ninja");
ninja.push(23);
age = 23;
gender = "Female";
let st;
st = { age: age, gender: gender, name: user };
// any
let mix = 23;
mix = "Hello";
let mixs = [];
mixs.push("Name");
mixs.push(23);
const add = (a, b, c = 10) => {
    console.log(a + b);
    console.log(c);
};
const minus = (a, b) => {
    return a + b;
};
let result = minus(20, 20);
const greet = (user) => {
    console.log(`name : ${user.name} , UID : ${user.uid}`);
};
const greetAgain = (user) => {
    console.log(`name : ${user.name} , UID : ${user.uid}`);
};
let cal;
cal = (numOne, numTwo) => {
    return numOne + numTwo;
};
let type = document.querySelector("#type");
let detail = document.querySelector("#details");
let toForm = document.querySelector("#tofrom");
let form = document.querySelector("form");
let amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(type.value, detail.value, toForm.value, amount.valueAsNumber);
});
let invOne = new Invoice("Rin", "Working on mario website", 230);
let invTwo = new Invoice("Rong", "Working on ab website", 250);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach(v => {
    console.log(JSON.stringify(v.toJson()));
});

import { ListTemplete } from './classes/listTemplete.js';
import { Invoice } from "./classes/invoice.js";
import { Payment } from './classes/payment.js';
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
    let doc;
    let ul = document.querySelector("ul");
    let list = new ListTemplete(ul);
    if (type.value == "invoice") {
        doc = new Invoice(type.value, detail.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(type.value, detail.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, "start");
});
// let invOne = new Invoice("Rin", "Working on mario website", 230);
// let invTwo = new Invoice("Rong", "Working on ab website", 250);
// let invoices: Invoice[] = [];
// invoices.push(invOne);
// invoices.push(invTwo);

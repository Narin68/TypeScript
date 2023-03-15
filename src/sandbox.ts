class Invoice {
    client: string;
    detail: string;
    amount: number;
    constructor(c: string, d: string, a: number) {
        this.client = c;
        this.detail = d;
        this.amount = a;
    }

    toJson = () => {
        return {
            "Client": this.client,
            "Detail": this.detail,
            "Amount": this.amount,
        };
    }
}


const user = "Narin";
const input = document.querySelectorAll("input");

const circ = (d: number) => {
    return d * Math.PI;
}


let names: string[] = [];
names.push("Narin");
let age: number;
let gender: string;

let ninja: (string | number)[];
ninja = [];
ninja.push("Ninja");
ninja.push(23);
age = 23;
gender = "Female";


let st: {
    name: string,
    age: number,
    gender: string,
};

st = { age: age, gender: gender, name: user };
// any

let mix: any = 23;
mix = "Hello";
let mixs: any = [];
mixs.push("Name");
mixs.push(23);

const add = (a: number, b: number, c: string | number = 10) => {
    console.log(a + b);
    console.log(c);
}


const minus = (a: number, b: number): number => {
    return a + b;
}
let result = minus(20, 20);
type stringOrNum = string | number;
type userObj = { name: string, uid: stringOrNum };

const greet = (user: { name: string, uid: stringOrNum }) => {

    console.log(`name : ${user.name} , UID : ${user.uid}`);
}
const greetAgain = (user: userObj) => {
    console.log(`name : ${user.name} , UID : ${user.uid}`);
}
let cal: (a: number, b: number) => number;
cal = (numOne: number, numTwo: number) => {
    return numOne + numTwo;
}

let type = document.querySelector("#type") as HTMLSelectElement;
let detail = document.querySelector("#details") as HTMLInputElement;
let toForm = document.querySelector("#tofrom") as HTMLInputElement;
let form = document.querySelector("form") as HTMLFormElement;
let amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
    e.preventDefault();
    console.log(
        type.value,
        detail.value,
        toForm.value,
        amount.valueAsNumber,
    );
});

let invOne = new Invoice("Rin", "Working on mario website", 230);
let invTwo = new Invoice("Rong", "Working on ab website", 250);
let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach(v => {
    console.log(JSON.stringify(v.toJson()));
})







interface Data<T> {
    name: string,
    data: T,
}

let st: Data<string> = {
    name: "Dog",
    data: "String",
}

let arrSt: Data<string[]> = {
    name: "Cat",
    data: ["Array String"],
}
let obj: Data<object> = {
    name: "Cow",
    data: { name: "Sharun", age: 12, gender: "Male" },
}

console.log(st);
console.log(arrSt);
console.log(obj);

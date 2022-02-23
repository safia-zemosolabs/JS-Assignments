/*
 *
 * Part - A : Refactor the following function into a one-liner
 * 
 */
console.log("\nPart - A : Problem");

var printName = (name) => {

    return "Hi " + name;
}
console.log(printName("Lavanya"));  

console.log("\nPart A : Solution");

var printNameNew = name => "Hi " + name;

console.log(printNameNew("Lavanya"));



/*
 *
 * Part - B : Rewrite the following code using template literals
 * 
 */
console.log("\nPart - B : Problem");

var printBill = (name, bill) => {

    return "Hi " + name + ", please pay: " + bill;
}
console.log(printBill("Lakshmi",500));

console.log("\nPart B : Solution");

var printBillNew = (name, bill) => {

    return `Hi ${name}, please pay: ${bill}`;
}
console.log(printBillNew("Lakshmi",500)); 

/*
 *
 * Part - C : Modify the following code such that the object properties 
 *            are destructured and logged.
 * 
 */
console.log("\nPart - C : Problem");

const person = {

    name: "Noam Chomsky",
    age: 92
};

let name = person.name;
let age = person.age;
console.log(name);
console.log(age);

console.log("\nPart C : Solution");

const personNew = {

    pName: "Noam Chomsky",
    pAge: 92
};

const {pName, pAge} = personNew;
console.log(pName);
console.log(pAge);


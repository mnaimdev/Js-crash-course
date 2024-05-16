// ------------ scope: let, var & const -------------------- //
// let age = 25;
// let framework = 'Codeignator';

// function getFullName(frame) {
//     framework = frame;
//     console.log(framework);
// }

// getFullName("Laravel");
// console.log(framework);

// ---------------------- function -------------------- // 
// const hello = (a, b) => (
//    {
//         name: "Mohammad Naim",
//         birthYear: 1999,
//         age: 25
//     }
// )

// const plan = function() {
//     return () => {
//         return 'hi';
//     }
// }

// const greet = hello(3, 5);
// console.log(greet);

// console.log(plan());
// console.log(plan()());
// console.log(plan);

// --------------------------------- event ------------------------------------ //

// const clicked = function() {
//         alert('clicked');
//     }


// const clickBtn = document.getElementById('click');
// clickBtn.addEventListener('click', clicked);


// ----------------------------- primitive vs reference ----------------------- //
// let a = 13; // a separate reference or address
// let b = 6; // a separate reference or address

// b = a; // b catch of a's value not a's address

// a  = 100;

// console.log(a);
// console.log(b);

// let profession = 'Software Engineer';

// const message = {
//     first: "hi",
//     last: "bye",
// }

// const result = message;

// console.log(result);

// message[profession] = "Number One";
// console.log(message);
// console.log(result);


// --------------------------- array methods ---------------- //

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const findNumber = numbers.find((num) => {
//     return num === 4;
// })

// const findNumberIndex = numbers.findIndex((num) => {
//         return num === 6;
//     })

// const spliceNumber = numbers.slice(1, 4);

// const spliceNumber = numbers.splice(1, 4, "Naim", 25);

// const mappedNumbers = numbers.map((num) => {
//     return num + "-";
// })

// const filteredNumbers = numbers.filter((num) => {
//     return num % 2 !== 0;
// })

// const reduceNumbers = numbers.reduce((total, currentValue) => {
//     return total + currentValue;
// }, 0);

// numbers.forEach((num) => {
//     console.log(num);
// })

// for (num of numbers) {
//     console.log(num);
// }

// for (c of "numbers") {
//     console.log(c);
// }

// const person = {
//     name: "Mir Faisal",
//     age: 24,
//     location: "Rajshahi"
// }

// for (key in person) {
//     console.log(person[key]);
// }

// let res = [];
// for (let i = 1; i <= numbers.length; i++) {
//     res.push(i + "-");
// }

// console.log(Object.entries(person));
// console.log(Object.keys(person));
// console.log(Object.values(person));


// -------------- spread and rest ----------------- //

// const fruits = ["Mango", "Apple", "Orange", "Banana"];

// const copyOfFruits = [...fruits];

// fruits.push("Coconut");

// console.log(...fruits);
// console.log(copyOfFruits);

// const details = [
//     { name: 'Faisal',
//         age: 24,
//     },
//     { name: 'Mohammad Naim',
//         age: 25
//     },
//     { name: 'Saiful',
//         age: 22
//     }
// ];


// const person = {
//     name: 1,
//     age: 25,
// }

// const people = {
//     ...person
// }

// console.log(people);
// console.log(...details);


// function calc(a, ...b) {
//     let c = b.reduce((total, curr) => total + curr);
    
//     return a + c;
// }

// console.log(calc(2, 6, 7, 8));


// -------------- destructure ----------------------- //

// const informations = {
//     name: "Mohammad Naim",
//     details: {
//         "profession": "Software Engineer",
//         "hobby": "travelling",
//         "dream": "Software Engineer in Google",
//         // "location": {
//         //     "current": "Dhaka"
//         // }
//     },
//     age: 25,
// }

// // const {name, age, details: {location: {current}}} = informations;

// // console.log(current);
// console.log(informations?.details?.location?.current);


// const calculations = [1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const [first, second] = calculations;
// console.log(second);


// ---------------------- fetch ------------------ //

let url = "https://jsonplaceholder.typicode.com/posts";

async function getData() {
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    };


function callData() {
    return getData();
}

(async function() {
    const output = await callData();
})();

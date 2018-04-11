////////////////////////////////// LET / CONST
console.log('let / const');

let a = 'hello world'; // Variable
const b = 'leandro'; // Constant

let c = `Hello ${b}`; // String template
console.log(c);

/////////////////////////////////// SPREAD OPERATOR
console.log('Spread operator');

let arr1 = [7, 8, 9];
let arr2 = [6, ...arr1, 10]; // Spread arr1 in the middle of arr2
console.log(arr2);

function print(a, b, c) {
    console.log(a, b, c);
}
print(...arr1); // Spread array values as args

function printSpread(...a) { // Spread as function args
    console.log(a);
}
printSpread(1, 2, 3, 4);

function butter(...arr) {
    let a = [1, 2, 3];
    return [...a, ...arr];
}
console.log(butter(4, 5, 6));

////////////////////////////////// DESTRUCTING ASSIGNMENT - ARRAY
console.log('Destructing Assignment - Array');

let arr3 = [100, 200, 300, 400];
let [v1, v2] = arr3; // Reassign 2 first elements of arr3
console.log(v1, v2);

let [h1, ...t1] = arr3; // Get head and tail of arr3
console.log(h1, t1);

// let [...h2, t2] = arr3; // Invalid - Syntax errr

////////////////////////////////// DESTRUCTING ASSIGNMENT - OBJECT
console.log('Destructing Assignment - Object');

let car = { wheel: 4, door: 2, brand: 'volks', model: 'gol' };
let { color, wheel, door } = car; // Assign car properties to variables
console.log(color, wheel, door);

let model = 'palio';
let brand = 'fiat';
console.log(model, brand);

({ model, brand } = car) // Assign car properties to existing variables
console.log(model, brand);

////////////////////////////////// ARROW FUNCTIONS
console.log('Arrow functions');

const countdown = (i) => { // Arrow function with param
    let str = '';
    for (; i > 0; i--) {
        str += i + '...';
    }
    console.log(str);
};
countdown(5);

////////////////////////////////// MAP FUNCTIONS
console.log('Map functions');

let points = [10, 20, 30];
points = points.map(val => val + 1);
console.log(points);

////////////////////////////////// FILTER METHOD
console.log('Filter method');

let scores = [1, 1, 5, 6, 7, 10, 8];
let approved = scores.filter(g => g >= 7);
console.log(approved);

////////////////////////////////// EXPORT / IMPORT
console.log('Export / Import');

import { students, total } from './students';
console.log(students, total);

import { add, multiply } from './calculator'; // Import add and multiply
console.log(add(1, 2), multiply(2, 2));

import times from './calculator'; // Import default function
console.log(times(3, 5));

////////////////////////////////// CLASSES
console.log('Classes');

import Building from './building';

let House = new Building(5, 5);
House.area();

class Office extends Building {
    constructor(height, width, employees) {
        super(height, width);
        this.employees = employees;
    }

    area() {
        let calc = super.area();
        console.log(`Office area = ${calc}`);
    }

    getEmployees() {
        console.log(this.employees);
    }
}

let office = new Office(10, 10, 30);
office.area();
office.getEmployees();
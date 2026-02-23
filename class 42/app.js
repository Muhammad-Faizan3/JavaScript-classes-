// default parameter

// function test(a,b,c) {
//     return a + b + c;    
// }
// console.log( test());

// function test(a = 2,b = 5,c = 10) {
//     return a + b + c;    
// }
// console.log( test(10,10,10));

// Function as a variable


// let greet = function() {
//     console.log('Hello javaScript');

// }
// greet();

// function sayHello () {
//     console.log('hello');
// }
// function sayBye() {
//     console.log('good Bye');

// }
// function callFunction(say , bye) {
//     say();
//     bye();
// }
// callFunction(sayHello,sayBye);

// function outer() {
//     return function() {
//         console.log('inner function');
//     }
// }
// let result = outer();
// result();

// function calculater(a, b, operatiion) {
//     return operatiion(a, b);
// }
// function add(x, y) {
//     return x, y;
// }
// console.log(calculater(5, 3, add));


let numbers = [1,2,3,4];

let iterate = numbers.forEach((data) => {
    console.log(data);
    
});
console.log(iterate);


let test = numbers.map((data) => {
    // return data
    console.log(data);
    
})
console.log(test);

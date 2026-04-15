// Section 1: Multiple Choice Questions (10 Marks)

// Question 1
// 1. What does map() return?
// b) New array

// Question 2

// 2. What is filter() used for?
// c) Selecting elements based on condition

// Question 3

// 3. What does forEach() return?
//  Ans Nothing

// Question 4

// 4. Which method returns the first matching element?
// Ans Array.find()

// Question 5

// 5. Which method returns the index of the first match?
// Ans array.indexoff()


// Section 2: Output Based Questions (20 Marks)

// Question 1

// let arr = [1,2,3,4];
// let result = arr.map(x => x * 2);
// console.log(result);
// Ans [2,4,6,8]


// Question 2

// let arr = [5,10,15];
// let result = arr.filter(x => x > 10);
// console.log(result);
// Ans [15]

// Question 3

//  let arr = [1,2,3];
// let sum = arr.reduce((acc,val)=>acc+val,0);
// console.log(sum);
// Ans 6

// Section 3: Coding Questions (40 Marks)

// Question 1
// 1. Use map() to square all numbers in [1,2,3,4,5].

// let numbers = [1, 2, 3, 4, 5];
// let squares = numbers.map(num => num * num);
// console.log(squares);
// Ans [1, 4, 9, 16, 25]


// Question 2
// 2. Use filter() to get even numbers.

// let numbers = [1, 2, 3, 4, 5];
// let evenNumbers = numbers.filter(function(num) {
//   return num % 2 === 0;
// });
// console.log(evenNumbers);
// Ans [2, 4]

// Question 3
// 3. Use reduce() to calculate sum.
// let numbers = [1, 2, 3, 4, 5];
// let sum = numbers.reduce(function(acc, num) {
//   return acc + num;
// }, 0);
// console.log(sum);
// Ans 15

// Question 4
// 4. Use find() to get first number greater than 3.
// let numbers = [1, 2, 3, 4, 5];
// let result = numbers.find(function(num) {
//   return num > 3;
// });
// console.log(result);
// Ans 4

// Question 5
// 5. Use findIndex() to get index of number 4.
// let numbers = [1, 2, 3, 4, 5];
// let index = numbers.findIndex(function(num) {
//   return num === 4;
// });
// console.log(index);
// Ans 3

// Question 6
// 6. Merge [1,2] and [3,4] using concat().
// let arr1 = [1, 2];
// let arr2 = [3, 4];
// let merged = arr1.concat(arr2);
// console.log(merged);
// Ans [1,2,3,4]

// Question 7
// 7. Join ['Hello','World'] into 'Hello World' using join().
// let words = ["Hello", "World"];
// let sentence = words.join(" ");
// console.log(sentence);
// Ans Hello World

// Question 8
// 8. Sort an array in ascending order using sort().
// let numbers = [5, 2, 8, 1, 4];
// numbers.sort(function(a, b) {
//   return a - b;
// });
// console.log(numbers);
// Ans [1, 2, 4, 5, 8]

// Question 9
// 9. Reverse an array using reverse().
// let numbers = [1, 2, 3, 4, 5];
// numbers.reverse();
// console.log(numbers);
// Ans [5, 4, 3, 2, 1]

// Section 4: Real-Life Problem (30 Marks)

// Question 1
// Given:
// let students = [
// {name:'Ali',marks:80},
// {name:'Sara',marks:45},
// {name:'Ahmed',marks:70}
// ];
// 1. Get passing students using filter().
// 2. Extract only names using map().
// 3. Calculate total marks using reduce().

// let students = [
//   { name: 'Ali', marks: 80 },
//   { name: 'Sara', marks: 45 },
//   { name: 'Ahmed', marks: 70 }
// ];
// let pass = students.filter(function(student) {
//   return student.marks >= 50;
// });
// console.log(pass);
// let names = students.map(function(student) {
//   return student.name;
// });
// console.log(names);
// let total = students.reduce(function(sum, student) {
//   return sum + student.marks;
// }, 0);
// console.log(total);
// Ans
//  [
//   { name: 'Ali', marks: 80 },
//   { name: 'Ahmed', marks: 70 }
// ]
// ["Ali", "Sara", "Ahmed"]
// 195



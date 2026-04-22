// let myFunc = 'blue';;
// let a = 12;
// let b = 5;
// console.log(a+ ++a - b--);


// let firstName = 'Muhammad ';
// let lastName = 'Faizan';
// let fullName = firstName + lastName;
// console.log(fullName);

// console.log(2+2+ '22');





// console.log(username)

// temporal dead zone == > TDZ
// let username = "hasancoder66"



// let userName = "hasanCoder66"

// const USERNAME = "HASANCODER66"




// variable declare

// var mobile;


// variable declare and initialize 
// var mobile = "Samsung"
// mobile = "Iphone"


// initailize kia hota hai ?

// undefined  ===> system generate

// var username;

// console.log(username)

// if(username){
//     console.log("if true hogiaa ")
// }else {
//     console.log("else block chlaa ==>")
// }


// var jo hai redeclare hojata hai + reassign bi hojata hai 

// var declaration;



// let jo hai redeclare nhi hota. reassign hojata hai.
// let declaration1 ;
// declaration1 = "declaration2"



// const 1 hi dafa declare or initialize hota hai second time koi value accept nhi kerta. 

// const declaration2 = "declaration2"
// declaration2 = "declaration2"





// let a = 12;
// let b = 5

// console.log(a + ++a - b--)



// pre increment  
// post increment   




// let firstName = "Muhammad"
// let lastName = "Hasan"

// "", '', ``

// let fullName = firstName + "" + lastName // one
// let fullName = firstName.concat(" " + lastName) // two
// let fullName = `${firstName} ${lastName}` // three

// console.log(fullName)


// let result = 2 + 2 + 1334578
// console.log(result.slice(0 , 2))





// conditional statement


// job requirements ==>   age => 18 , location == karachi , exp == 1, lang == js , qualification == 'matric'


// let age = 18;
// let city = "Karachi"
// let exp = 1;
// let qualification = "matric"
// let lang = "JavaScript"


// if(age >= 18){
// if(city == "Karachi"){
//   if(exp == 1){
//       if(lang == "JavaScript"){
//            if(qualification == "matric"){
// message(`You Are Elegible for this job!
//     Congratulations!
//     `)
// }else {
//     message("beta board ke paper ki tayyari kero.")
// }
// }else {
//     message("js seekhloo.")
// }

// }else {
//     message("Experience Kerlo life mai.")
// }
// }else {
//     message("Karachi Ajaou")
// }
// }else{
//     message("barry hoker aou")
// }



// function message (m){
//     console.log(m)
// }




// let arr = [12, false, "string", 45, true, {name : "hasan"}]

// arr[5].name = "shakoor"





// console.log(arr.slice(0,2))
// console.log(arr)





// higher order methods || callback functions
// splice, map, filter, find, findIndex, slice
// for loop

// let arr = ["hassan", "faizan", "Azfal", " saleem"];
// console.log(arr, 'Bofore Splice');
// console.log(arr.splice(0,1,'shayan'));
// console.log(arr.slice(0,1));
// console.log(arr,'After splice Array');


// function foo (a) {
//     console.log(a);
// }

// function abc (cb) {
// cb(56)
// }
// abc(foo)

// function result (sum) {
// sum(40,40)
// }
// function sum (a,b) {
//     console.log(a+b);
    
// }
// result(sum)

//forEach kuch nhi return kerta
// map return krta hai 1 array
//filter return krta hai 1 array

// find return karta hai true condition jobh hogi pehli value

// let arr = [1,2,3,4,5,6];

// let returnForEach = arr.forEach((item) => {
//     console.log(item);
// })
// console.log(returnForEach);


// let returnMap = arr.map((item) => item *2)
// console.log(returnMap);

// let filterItems = arr.filter((item) => item > 2)
// console.log(filterItems);



// let findReturn = arr.find((item) => item === 4)
// console.log(findReturn)

// let arr = [12,'hassan',true];
// let arr2 = [];
// arr.forEach((item) => {
//     console.log(item);
//     arr2.push(item + 'kuch bi')
    
// })
// console.log(arr2);



// let mapReturn = arr.map(function (item) {
//     return item + 'Kuch bi';
// })

// console.log(mapReturn);

// let para = 'lorem ipsum dolar . lorem ipsum dolar';

// console.log(para.replace(/dolar/g,'pakistan'));

// let arr = ['50','asdfi','dsfv','8'];

// let randomNum = Math.random(Math.random()*arr.length)
// console.log(randomNum);

// let num = '12.345';
// console.log(parseInt(num));
// console.log(parseFloat(num));


// let currentDate = new Date();
// console.log(currentDate.getTime());


// let user = 'faizan';
// console.log(user.charAt());



// let arr = [1,2,3,4,5];

// let bigNum = [];

// for(let i = 0; i< arr.length; i++){
//     // console.log(arr[i] > 2);

//     if(arr[i] > 2){
//         bigNum.push(arr[i])
//     }    
// }
// console.log(bigNum);


// let filteredItems = arr.filter((item) => item > 2 )
// console.log(filteredItems);




// let arr = [1,2,3,4,5];

// let bigNum = [];

// for(let i = 0; i < arr.length; i++) {
//     if (arr[i] > 2) {
//         bigNum.push(arr[i])
//     }
// }
// console.log(bigNum);


// let filteredItems = arr.filter((item) => item > 2)
// console.log(filteredItems);

// normal function 

// function greet (num, num1) {
//     console.log(num + num1);
// }
// greet (12,32)

// arguement wahan hota hai jahan fn call kia jata hai

// // arow function 
// let arrowFn = (...arg) => {
//     return a    
// }
// console.log(arrowFn(12,43,56,78));


// hello()
// function hello() {
//     console.log('Hello world');
    
// }

// hello()
// var hello = () => {
//     console.log('hello world');
    
// }

// let newFunc = () => {
//     let user = 'Saylani';
// }
// newFunc();
// console.log(user);
// console.log(myFunc);

// let test = () => {
//     let user = 1
//     console.log('user first',user);
// }
// test();

// let test2 = () => {
//     let user = 2
//     console.log('user Second', user);
// }
// test2();

// let test3 = () => {
//     let user = 3;
//     console.log('user third',user);
// }
// test3();


// switch case // 


// let dayInWeek;
// let today = new Date();
// let days = today.getDay();
// console.log(days);

// if(days === 1) {
//     dayInWeek = "Monday"
// }else if (days === 2){
//     dayInWeek = "Tuesday"
// }else if (days === 3){
//     dayInWeek = "Wedesday"
// }else if (days === 4){
//     dayInWeek = "Thurday"
// }else if (days === 5){
//     dayInWeek = "Friday"
// }else if (days === 6){
//     dayInWeek = "Saturday"
// }else{
//     dayInWeek = "sunday"
// }



// switch (dayInWeek) {
//     case 'saturday':
//         console.log('Its Holiday');
//         break;
//         case 'sunday':
//             console.log('Its also holiday')
//             break;
//             case 'Monday':
//             console.log('Its Monday')
//             break;
//             case 'Tuesday':
//             console.log('Its Tuesday')
//             break;
//             case 'Wedesday':
//             console.log('Its Wedesday')
//             break;
//             case 'Thurday':
//             console.log('Its Thurday')
//             break;
//             case 'Firday':
//             console.log('Its Friday')
//             break;
//         default:
//             console.log('So sad its working day');
//         break;
// }

// while loop 

// for(let i = 0; i <= 10; i++) {

// }

// let i = 0;

// while(i <= 5) {
//     alert(i);
//     i++;
    
// }

// do while loop

// let i = 0;

// do{
//     alert(i);
//     i++;
// }
// while(i <=5);


// function checkAddress(fieldId) {
//     if(document.getElementById(fieldId).value === "") {
//         alert('Email Address required.')
//     }
// }


// OBJECT 

// let obj = {
//     name : 'Karachi'
// }
// obj.foodStreet = 'Burns Road'
// console.log(obj);


// let arr1 = [
//     {
//         name : 'Faizan',
//         Work : 'Welfare',
//         area : ['bahadurabad', 'Gulshan']
//     },
//     {
//         name : 'Faizan2',
//         Work : 'Welfare2',
//         // area : ['bahadurabad', 'Gulshan']
//     }
// ];

// let des = arr1.map((data,index) => {
// return data.Work

// })
// console.log(des);


// function Plan(name, price, space, transfer, pages, discountMonths) {
//     this.name = name;
//     this.price = price;
//     this.space = space;
//     this.transfer = transfer;
//     this.pages = pages;
//     this.discountMonths = discountMonths;
// };
// let Plan1 = new Plan('basic', 1000, 100, 1223, 10, 0.05)
//     console.log(Plan1);

// let Plan2 = new Plan('premium', 1500, 120, 1226, 10, 0.05)
//     console.log(Plan2);


// let today = new Date();
// today.


// Promise

// new Promise((resolve, reject) => {
//     let car = true;

//     if(car){
//     console.log('kaam hogaya');
//     resolve()
//     }else{
//         console.log('kaam nhi hua');
//         reject()
        
//     }
// }).then((res) =>res)
// .catch((err) => err)
// .finally(() => console.log('finaL Chala'))

// new Promise((resolve,reject) => {
//     let user = false;
//     user ? resolve('you can go') : reject('you cant')
// })
// .then((res) => console.log(res))
// .catch((err) => console.log(err))
// .finally(() => console.log('final'))

// fetch('https://jsonplaceholder.typicode.com/todos/1')

// let data = async () => {
//     let myData = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//     let parsed = await myData.json()
//     console.log(parsed);
    
    
// }
// data()

// event loop
// setTimeout
// async await
// web  apis

let user = 'Faizan';

setTimeout(() => {
    console.log('set time out');
},1000);
new Promise((resolve,reject) => {
    console.log('prom   ise chala');
    resolve();
});

console.log('user ', user);

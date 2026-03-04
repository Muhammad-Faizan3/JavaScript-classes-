// let car = {
//     color : 'red',
//     model : 2026,
//     start : () => {
//         console.log('Engine started!');
//     }
// }
// car.start();

// function Person (name, age ) {
//     this.name = name;
//     this.age = age;
//     this.greet = function () {
//         console.log('Hi, Im ' + this.name);
        
//     };
// }

// Person.prototype.sayAge = function () {
//     console.log(this.age);
// }

// let person1 = new Person ('ali', 20);
// person1.sayAge()
// let person2  = new Person ('sara', 34);


class Modal {
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log('hello '+ this.name);     
    };
    // get age() {
    //     return this.age  
    // }
    // set name (abc) {
    //     return thid,this.name = abc;
    // }
}
let user = new Modal ('faizan' , 23);

user.greet()
// console.log(user.age());

// user.name('afzal')

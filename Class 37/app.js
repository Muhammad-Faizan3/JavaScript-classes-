// // prototype interitance

// Object.prototype.sum = function(a,b) {
//     return a + b;
// };

// console.log(Object.prototype);

// let result = Object.prototype.sum(12, 12)
 // console.log(result);

// Conctructure Function;

function Plan(name, price, space, transfer, pages, discountMonth) {
    this.name = name;
    this.price = price;
    this.space = space;
    this.transfer = transfer;
    this.pages = pages;
    this.discountMonth = discountMonth;
    this.culcAnnual = function(percentIfDisc){
      let  bestPrice = this.price;
      let currentDate = new Date();
      let currentMonth = currentDate.getMonth();
      for(let i = 0; i < this.discountMonth.length; i++) {
        if(this.discountMonth[i] === currentMonth) {
            bestPrice = this.price * percentIfDisc;
            
        }
      }
      return bestPrice * 12
    }
};
let plan1 = new Plan('Basic',3.99, 100, 1000, 10, [6,7]);
console.log(plan1);
console.log(plan1.culcAnnual(0.10));


let plan2 = new Plan('Professional',3.99, 100, 1000, 10, [6,7]);
let plan3 = new Plan('Basic',3.99, 100, 1000, 10, [6,7]);



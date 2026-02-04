// let div = document.getElementById('parents');
// // let hasAtv = div.hasAttribute('class');
// // // console.log(hasAtv);    
// // let getAtv = div.getAttribute('class');
// // console.log(getAtv);

// let attList = div.attributes
// console.log(attList);


// var parentDiv = document.getElementById('div1');
// var newPara = document.createElement('p');
// var t = document.createElement('Hello World');
// newPara.appendChild(t);
// let para1 = parentDiv.firstChild;
// parentDiv.insertBefore(newPara,para1);


let parentDiv = document.getElementById('div1');
let childList = parentDiv.childNodes;

for (let i = 0; i < childList.length; i++) {
    if(childList[i].nodeType === 3) {
        console.log(childList[i]);
        
    }
}
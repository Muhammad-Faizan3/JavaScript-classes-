// // hoisting
// // console.log(a);
// // var a = 10;

// // console.log(b);
// // let b = 20;

// // function hoisting
// greet();
// function greet() {
//     console.log("Hello, welcome to JavaScript!");
// }    


var ul = document.getElementById("ul");
var inp = document.getElementById("inp");

var todos = JSON.parse(localStorage.getItem("todos")) || [];

function todo(){
    ul.innerHTML = "";

    if(inp.value.trim() !== "") return
    var obj = {
        id: Date.now(),
        text: inp.value,
        completed: false
    }
    todos.push(obj);
    localStorage.setItem("todos", JSON.stringifyt(todos));
    renderTodos();
}
function renderTodos(){
    // ul.innerHTML = "";
    for(let i=0; i<todos.length; i++){
        var li = document.createElement("li");
        li.innerText = todos[i].text;
        ul.appendChild(li);
        
    }
}
var ul = document.getElementById("ul");
var inp = document.getElementById("inp");

var todos = JSON.parse(localStorage.getItem("todos")) || [];
// var statusTxt = 'pending';

function todo(){
    ul.innerHTML = "";

    if(inp.value.trim() === "") return;
    var obj = {
        id: Date.now(),
        text: inp.value,
        completed: false,
    }
    todos.push(obj);
    localStorage.setItem("todos", JSON.stringify(todos));
    renderTodos();
}
function renderTodos(){
    ul.innerHTML = "";
    for(let i=0; i< todos.length; i++){
        let id = todos[i].id;
        var li = document.createElement("li");
        li.innerText = todos[i].text;
        ul.appendChild(li);

        var delBtn = document.createElement("button");
        delBtn.innerText = "Delete";
        li.appendChild(delBtn);
        delBtn.addEventListener('click',function(){
            deleteTodo(id);
        })

        var eiBtn = document.createElement("button");
        eiBtn.innerText = "Edit";
        li.appendChild(eiBtn);
        eiBtn.addEventListener('click', function() {
            editButton (id);
        })

        //status button
        var status = document.createElement("button");
        // console.log(todos[i].completed);
        
        if(todos[i].completed === true){
            status.innerHTML = "Completed";
        }else{
            status.innerHTML = "Pending";
        }
        li.appendChild(status);
        status.addEventListener('click', function(){
            changeStuts(id);
        })
        
        
    }
}

function deleteTodo(id){
    var newTodos = [];
    for(let i=0; i<todos.length; i++){
        console.log(todos[i]);
        if(todos[i].id !== id){
            newTodos.push(todos[i]);
        }
    }
    todos = newTodos;
    localStorage.setItem("todos", JSON.stringify(todos));
    renderTodos();
    
}
function editButton(id){
    for(let i=0; i<todos.length; i++){
        if(todos[i].id === id){
            var update = prompt("Update your todo", todos[i].text);
            todos[i].text = update;
            localStorage.setItem("todos", JSON.stringify(todos));
        }
    }
    renderTodos();
}
function changeStuts(id){
    // var newTodos = [];
    for(let i=0; i<todos.length; i++){
        if(todos[i].id === id){
            if(todos[i].completed === false){
                todos[i].completed = true;
            }else{
                todos[i].completed = false;
            }
        }
    }
    localStorage.setItem("todos", JSON.stringify(todos));
    renderTodos();
}
   
renderTodos();
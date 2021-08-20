const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelector(".card-body")[0];
const secondCardBody = document.querySelector(".card-body")[1];
const filter = document.querySelector("#filter");
const clearButton = document.querySelector("#clear-todos");

eventListeners();

function eventListeners() {

    form.addEventListener("submit", addTodo);
    document.addEventListener("DOMContentLoaded", loadAllTodosToUI);
    secondCardBody.addEventListener("click", deleteTodo);
}
function deleteTodo(e){
    if(e.target.className == "fa fa-remove"){
        e.target.parentElement.parentElement.remove();
        deleteTodoFromStorage( e.target.parentElement.parentElement.remove());

    }
}
function deleteTodoFromStorage(deleteTodo){
    let todos = getTodosFromStorage();
    todos.forEach(function(todo,index){
        if(todo === deleteTodo){
            todos.splice(index,1);
        }
    })
    localStorage.setItem("todos",JSON.stringify(todos));
}
function loadAllTodosToUI() {
    let todos = getTodosFromStorage();
    todos.forEach(function (todo) {
        addTodoToUI(todo);
    })

}

function addTodo(e) {
    const newTodo = todoInput.value.trim();
    if (newTodo === "") {
        showAlert("danger", "please type a todo");
    } else {
        addTodoToUI(newTodo);
        addTodoToStorage(newTodo);
        showAlert("success", "todo eklendi");
    }

    e.preventDefault();
}

function getTodosFromStorage() {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    return todos;
}

function addTodoToStorage(newTodo) {
    let todos = getTodosFromStorage();
    todos.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(todos));
}

function showAlert(type, message) {
    const alert = document.createElement("div");
    alert.className = `alert alert-${type}`;
    alert.textContent = message;
    console.log(alert);
    firstCardBody.appendChild(alert);
}

function addTodoToUI(newTodo) {

    const listItem = document.createElement("li");
    const link = document.createElement("a");
    link.href = "#";
    link.className = "delete-item";
    link.innerHTML = "<i class = 'fa fa-remove'></i>";
    listItem.className = "list-group-item d-flex justify-content-between";
    listItem.appendChild(document.createTextNode(newTodo));
    listItem.appendChild(link);

    todoList.appendChild(listItem);
    todoInput.value = "";
}
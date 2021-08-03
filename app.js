const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelector(".card-body")[0];
const secondCardBody = document.querySelector(".card-body")[1];
const filter = document.querySelector("#filter");
const clearButton = document.querySelector("#clear-todos");

eventListeners();

function eventListeners(){

    form.addEventListener("submit",addTodo);
}
function addTodo(e){
    const newTodo = todoInput.value;
    console.log(newTodo);

    e.preventDefault();
}
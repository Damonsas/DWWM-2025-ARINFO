const todolist = document.querySelector(".todo_list");
const input = document.querySelector("input");
const addButton = document.querySelector("#add_todo");


addButton.addEventListener("click", () => {
    if (input.value.trim() !== "") {
        const todoItem = document.createElement("li");
        todoItem.textContent = input.value;
        todolist.appendChild(todoItem);
        input.value = "";
    } else {
        alert("Please enter a task.");
    }
});
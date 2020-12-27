//Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//Event Listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);

//Functions

function addTodo(event) {
  // Prevent Form from submitting
  event.preventDefault();

  // Check if the input is not empty
  if (todoInput.value !== "") {
    // Todo DIV
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    const newTodo = document.createElement("input");
    newTodo.setAttribute("type", "text");
    newTodo.setAttribute("value", todoInput.value);
    newTodo.setAttribute("disabled", "");

    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    // Check mark button
    const completedButton = document.createElement("button");
    completedButton.innerHTML = "<i class='fas fa-check'></i>";
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    // Check edit button
    const editedButton = document.createElement("button");
    editedButton.innerHTML = "<i class='fas fa-edit'></i>";
    editedButton.classList.add("edit-btn");
    todoDiv.appendChild(editedButton);

    // Check trash button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = "<i class='fas fa-trash'></i>";
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    //Create array of options to be added
    var array = ["white", "red", "green", "blue"];

    //Create and append select list
    var selectList = document.createElement("select");
    selectList.classList.add("mySelect");
    todoDiv.appendChild(selectList);

    //Create and append the options
    for (var i = 0; i < array.length; i++) {
      var option = document.createElement("option");
      option.value = array[i];
      option.text = array[i];
      selectList.appendChild(option);
    }

    // Append to List
    todoList.appendChild(todoDiv);

    // CLear Todo Input Value
    todoInput.value = "";
  }
}

function deleteCheck(e) {
  const item = e.target;
  // Delete Todo
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    // Animation
    todo.classList.add("fall");
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }

  // Check mark
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }

  // Edit Note
  if (item.classList[0] === "edit-btn") {
    const todo = item.parentElement.childNodes[0];
    if (todo.disabled === true) {
      todo.disabled = false;
      todo.focus();
      todo.select();
    } else {
      todo.disabled = true;
    }
  }

  // Change Color
  if (item.classList[0] === "mySelect") {
    const todo = item.parentElement;
    const selectedColor = todo.childNodes[4].value;
    if (selectedColor !== "white") {
      todo.childNodes[0].style.color = "white";
    } else {
      todo.childNodes[0].style.color = "black";
    }
    todo.style.backgroundColor = selectedColor;
    todo.childNodes[0].style.backgroundColor = selectedColor;
  }
}

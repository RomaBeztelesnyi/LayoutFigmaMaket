const button = document.querySelector(".btn");
const list = document.querySelector(".todo_list_item");
const inputText = document.querySelector(".input-text");

let itemBeingEdited = null;
let countList = 0 || localStorage.length; // щоб не перезаписувати id задач

const savedTasks = Object.entries(localStorage);
console.log(savedTasks);

function loadLocalStarage() {
  if (savedTasks.length === 0) return;
  for (let i = 0; i < savedTasks.length; i++) {
    const [id, task] = savedTasks[i];
    createElement(id, task);
  }
}

button.addEventListener("click", createElement);

function createElement(id, task) {
  if (itemBeingEdited) {
    itemBeingEdited.firstChild.textContent = inputText.value;
    localStorage.setItem(itemBeingEdited.getAttribute("id"), inputText.value); // ще й оновимо збережене
    itemBeingEdited = null;
    button.textContent = "Add Task";
    inputText.value = "";
    return;
  }

  const listItem = document.createElement("li");
  const groupBtn = document.createElement("div");
  const doneButton = document.createElement("button");
  const editButton = document.createElement("button");
  const removeBtn = document.createElement("button");

  if (id && task) {
    listItem.setAttribute("id", id);
    listItem.innerText = task;
  } else {
    if (!inputText.value || inputText.value.trim() === "") {
      alert("Please enter task");
      return;
    }
    listItem.setAttribute("id", `task-${countList++}`);
    listItem.innerText = inputText.value;
    localStorage.setItem(listItem.getAttribute("id"), inputText.value);
  }

  // Add classes
  listItem.classList.add("list_item");

  removeBtn.classList.add("btn_remove");
  editButton.classList.add("btn_edit");
  doneButton.classList.add("btn_done");
  groupBtn.classList.add("btn_group");

  removeBtn.innerText = "X";
  editButton.innerText = "✎";
  doneButton.innerText = "✔";

  groupBtn.append(doneButton, editButton, removeBtn);
  listItem.append(groupBtn);
  list.append(listItem);

  inputText.value = "";

  removeBtn.addEventListener("click", (e) => {
    const list = e.target.parentNode.parentNode;
    list.remove();
    localStorage.removeItem(list.getAttribute("id"));
  });

  editButton.addEventListener("click", editListItem);

  doneButton.addEventListener("click", () => {
    listItem.classList.toggle("done");
  });
}

function editListItem(e) {
  const listItem = e.target.parentNode.parentNode;
  inputText.value = listItem.firstChild.textContent;
  itemBeingEdited = listItem;
  button.textContent = "💾";
}

document.addEventListener("DOMContentLoaded", loadLocalStarage);

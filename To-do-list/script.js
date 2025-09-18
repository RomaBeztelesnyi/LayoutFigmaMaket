import { storage } from "./LogicComponents/storageHelper.js";
import { removeItem } from "./LogicComponents/removeItem.js";
import { editListItem } from "./LogicComponents/editListItem.js";
import { checkTaskLocalStorage } from "./LogicComponents/checkTask.js";
import { loadLocalStarage } from "./LogicComponents/loadLocalStorage.js";

const button = document.querySelector(".btn");
const list = document.querySelector(".todo_list_item");

export const inputText = document.querySelector(".input-text");

let itemBeingEdited = null;
let countList = storage.getTasks().length + 1;

button.addEventListener("click", createElement);

export function createElement(id, task) {
  checkTaskLocalStorage();
  if (itemBeingEdited) {
    itemBeingEdited.firstChild.textContent = inputText.value;
    storage.updateTask(itemBeingEdited.getAttribute("id"), inputText.value);
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
    const newTask = {
      id: listItem.getAttribute("id"),
      text: inputText.value,
    };
    storage.addTask(newTask);
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

  removeBtn.addEventListener("click", removeItem);

  editButton.addEventListener("click", editListItem);

  doneButton.addEventListener("click", () => {
    listItem.classList.toggle("done");
  });
}

document.addEventListener("DOMContentLoaded", loadLocalStarage);

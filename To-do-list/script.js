const button = document.querySelector(".btn");
const list = document.querySelector(".todo_list_item");
const inputText = document.querySelector(".input-text");

let itemBeingEdited = null;
let countList = 0;

button.addEventListener("click", () => {
  if (itemBeingEdited) {
    // режим редагування
    itemBeingEdited.firstChild.textContent = inputText.value;
    itemBeingEdited = null;
    button.textContent = "Add Task"; // повертаємо напис кнопки
    inputText.value = "";
    return;
  }
  // Create Element
  const listItem = document.createElement("li");
  const groupBtn = document.createElement("div");
  const doneButton = document.createElement("button");
  const editButton = document.createElement("button");
  const removeBtn = document.createElement("button");
  if (!inputText.value || inputText.value.trim() === "") {
    alert("Prease enter task");
    return;
  } else {
    listItem.innerText = inputText.value;
  }
  // Add classes
  listItem.classList.add("list_item");
  listItem.setAttribute("id", `item-${countList++}`);
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

  removeBtn.addEventListener("click", () => {
    listItem.remove(list);
  });

  editButton.addEventListener("click", editListItem);

  doneButton.addEventListener("click", () => {
    listItem.classList.toggle("done");
  });
});

function editListItem(e) {
  const listItem = e.target.parentNode.parentNode;
  inputText.value = listItem.firstChild.textContent;
  itemBeingEdited = listItem;
  button.textContent = "💾";
}

const button = document.querySelector(".btn");
const list = document.querySelector(".todo_list_item");
const text = document.querySelector(".input-text");

button.addEventListener("click", () => {
  // Create Element
  const listItem = document.createElement("li");
  const groupBtn = document.createElement("div");
  const removeBtn = document.createElement("button");
  const doneButton = document.createElement("button");
  // Add classes
  listItem.classList.add("list_item");
  removeBtn.classList.add("btn-remove");
  doneButton.classList.add("btn-done");
  groupBtn.classList.add("btn-group");

  // Content
  listItem.innerText = text.value;
  removeBtn.innerText = "X";
  doneButton.innerText = "✔";
  groupBtn.append(doneButton, removeBtn);
  listItem.append(groupBtn);
  list.append(listItem);
  text.value = "";
  removeBtn.addEventListener("click", () => {
    listItem.remove(list);
    removeBtn.remove(list);
    doneButton.remove(list);
  });
  doneButton.addEventListener("click", () => {
    listItem.classList.toggle("done");
  });
});

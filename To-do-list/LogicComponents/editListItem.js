export const editListItem = (e) => {
  const list = e.target.parentNode.parentNode;
  inputText.value = list.firstChild.textContent;
  itemBeingEdited = list;
  button.textContent = "💾";
};

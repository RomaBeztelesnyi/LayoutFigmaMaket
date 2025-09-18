import { inputText, button, setItemBeingEdited } from "../script.js";

export const editListItem = (e) => {
  const list = e.target.parentNode.parentNode;
  inputText.value = list.firstChild.textContent;
  setItemBeingEdited(list);
  button.textContent = "💾";
};

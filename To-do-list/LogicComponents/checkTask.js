import { storage } from "./storageHelper.js";
import { inputText } from "../script.js";
export const checkTaskLocalStorage = () => {
  if (storage.exists(inputText.value)) {
    alert("Task already exists");
    inputText.value = "";
    return;
  }
};

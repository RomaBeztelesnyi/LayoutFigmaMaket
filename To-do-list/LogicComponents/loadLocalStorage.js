import { storage } from "./storageHelper.js";
import { createElement } from "../script.js";

export function loadLocalStarage() {
  const taskArr = storage.getTasks();
  if (taskArr.length === 0) return;
  for (const { id, text } of taskArr) {
    createElement(id, text);
  }
}

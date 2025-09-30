import { storage } from "./storageHelper.js";
export const doneItem = (e) => {
  const list = e.target.parentNode.parentNode;
  list.classList.toggle("done");

  setTimeout(() => {
    list.remove();
    storage.removeTask(list.getAttribute("id"));
  }, 5000);
};

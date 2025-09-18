import { storage } from "./storageHelper.js";

export const removeItem = (e) => {
  const list = e.target.parentNode.parentNode;
  list.remove();
  storage.removeTask(list.getAttribute("id"));
};

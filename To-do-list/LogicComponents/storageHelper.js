export const storage = {
  getTasks() {
    const tasks = localStorage.getItem("tasks");
    return tasks ? JSON.parse(tasks) : [];
  },

  saveTasks(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  },

  addTask(task) {
    const tasks = this.getTasks();
    tasks.push(task);
    this.saveTasks(tasks);
  },

  removeTask(id) {
    const tasks = this.getTasks().filter((t) => t.id !== id);
    this.saveTasks(tasks);
  },

  updateTask(id, newText) {
    const tasks = this.getTasks().map((t) =>
      t.id === id ? { ...t, text: newText } : t
    );
    this.saveTasks(tasks);
  },

  exists(text) {
    return this.getTasks().some((t) => t.text === text);
  },
};

const itemTemplate = document.getElementById('todo-list-item-template');
const listElement = document.getElementById('todo-list');
const editForm = document.getElementById('edit-form');

editForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(editForm);
    const data = Object.fromEntries(formData.entries());

    if(data.title) {
        const listItem = itemTemplate.content.cloneNode(true);
        listItem.querySelector('.title').innerText = data.title;
        listItem.querySelector('.desc').innerText = data.desk;

        listElement.append(listItem);

        editForm.reset();
    }
})
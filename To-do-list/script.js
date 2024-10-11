const button = document.querySelector('.btn');
const list = document.querySelector('.todo_list_item');
const text = document.querySelector('.input-text');


button.addEventListener("click", () => {
    // Create Element
    const listItem = document.createElement('li');
    const removeBtn = document.createElement('button');
    const doneButton = document.createElement('button');
    // Add classes
    listItem.classList.add('list_item');
    removeBtn.classList.add('btn-remove');
    doneButton.classList.add('btn-done');
    
    // Content
    listItem.innerText = text.value;
    removeBtn.innerText = 'X';
    doneButton.innerText = '✔';
    listItem.append(doneButton,removeBtn)
    list.append(listItem)
    text.value=''
    removeBtn.addEventListener("click", () => {
        listItem.remove(list);
        removeBtn.remove(list);
        doneButton.remove(list)
    });
    doneButton.addEventListener('click', () => {
        listItem.classList.toggle('done');
    });
});
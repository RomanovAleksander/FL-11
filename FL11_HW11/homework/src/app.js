let rootNode = document.getElementById('root');
const warning = document.querySelector('.warning');
const form = document.querySelector('.todo-form');
const input = document.querySelector('.todo-input');
const submitBtn = document.getElementById('add-btn');
const list = document.querySelector('.list');
const maxItems = 10;
let todoItems = [];

function addTodo(text) {
    const todo = {
        text,
        checked: false,
        id: Date.now()
    };

    if (todoItems.length >= maxItems) {
        submitBtn.setAttribute('disabled', '');
        input.setAttribute('disabled', '');
        warning.classList.remove('hidden');
    } else {
        todoItems.push(todo);
        input.removeAttribute('disabled');
        warning.classList.add('hidden');
        list.insertAdjacentHTML('beforeend', `
        <li class="list-item" draggable="true" data-key="${todo.id}">
            <div class="todo-container" data-key="${todo.id}">
                <input class="tick-box" type="checkbox" id="${todo.id}">
                <label for="${todo.id}" class="tick"></label>
                <span class="todo-text">${todo.text}</span>
                <i class="material-icons edit">edit</i>
            </div>
            <i class="material-icons delete">delete</i>
        </li>
    `);
    }
}

function closeTodo(key) {
    const index = todoItems.findIndex(item => item.id === Number(key));
    const item = document.querySelector(`[data-key='${key}']`);
    todoItems[index].checked = true;
    item.classList.add('done');
}

function deleteTodo(key) {
    todoItems = todoItems.filter(item => item.id !== Number(key));
    const item = document.querySelector(`[data-key='${key}']`);
    item.remove();
    if (todoItems.length < maxItems) {
        input.removeAttribute('disabled');
        warning.classList.add('hidden');
    }
}


function saveChanges(btn, input, index, item, key, container) {
    btn.addEventListener('click', () => {
        const text = input.value;
        if (text !== '') {
            todoItems[index].text = text;
            item.querySelector('.todo-text').innerHTML = `${text}`;
            item.removeChild(container);
            for (let i = 0; i < item.children.length; i++) {
                item.children[i].classList.remove('hidden');
            }
        }
    });
}

function changeTodo(key) {
    const index = todoItems.findIndex(item => item.id === Number(key));
    const item = document.querySelector(`[data-key='${key}']`);

    for (let i = 0; i < item.children.length; i++) {
        item.children[i].classList.add('hidden');
    }
    item.insertAdjacentHTML('beforeend', `
     <div class="edit-container">
        <input class="change-input">
        <i class="material-icons save">save</i>
     </div>
    `);
    const container = item.querySelector('.edit-container');
    const changeInput = item.querySelector('.change-input');
    const saveBtn = item.querySelector('.save');

    saveChanges(saveBtn, changeInput, index, item, key, container);
}

// Check input and task
form.addEventListener('submit', event => {
    event.preventDefault();
    const text = input.value.trim();
    if (text !== '') {
        addTodo(text);
        input.value = '';
        input.focus();
    } else {
        submitBtn.setAttribute('disabled', '');
    }
});

// Check input and block button
input.addEventListener('input', () => {
    const text = input.value.trim();
    if (text !== '') {
        submitBtn.removeAttribute('disabled');
    } else {
        submitBtn.setAttribute('disabled', '');
    }
});

// Tracks user activity
list.addEventListener('click', event => {
    const itemKey = event.target.parentElement.dataset.key;
    if (event.target.classList.contains('tick-box')) {
        document.getElementById(`${itemKey}`).setAttribute('disabled', '');
        closeTodo(itemKey);
    }
    if (event.target.classList.contains('delete')) {
        deleteTodo(itemKey);
    }
    if (event.target.classList.contains('edit')) {
        changeTodo(itemKey);
    }
});

// Drag and drop
let draggedItem;

list.addEventListener('dragover', (event) => {
    event.preventDefault();
});

list.addEventListener('dragstart', (event) => {
    let target = event.target;
    while (target.className !== 'list-item') {
        target = target.parentNode;
    }
    if (target.className === 'list-item') {
        draggedItem = target;
        event.dataTransfer.setData('text/html', draggedItem);
    }
});

list.addEventListener('drop', (event) => {
    let target = event.target;
    while (target.className !== 'list-item') {
        target = target.parentNode;
    }
    if (target.parentNode.className === 'list') {
        target.parentNode.insertBefore(draggedItem, target.nextSibling);
    }
});

const form = document.getElementById('form');
const input = document.getElementById('input');
const todosUL = document.getElementById('todos');

const todos = JSON.parse(localStorage.getItem('todos'));

if (todos) {
    todos.forEach(function (todo) {
        addToDo(todo);
    });
}

form.addEventListener('submit', function (e) {
    e.preventDefault();

    addToDo();
});

function addToDo(todo) {
    let todoText = input.value;

    if (todo) {
        todoText = todo.text;
    }

    if (todoText) {
        const todoEl = document.createElement('li');
        todoEl.innerText = todoText;

        if (todo && todo.completed) {
            todoEl.classList.add('completed');
        }

        todoEl.addEventListener('click', function () {
            todoEl.classList.toggle('completed');
            updateLS();
        });

        todoEl.addEventListener('contextmenu', function (e) {
            e.preventDefault();
            todoEl.remove();
            updateLS();
        });

        todosUL.appendChild(todoEl);

        input.value = '';
        updateLS();
    }
}

function updateLS() {
    const todosEL = document.querySelectorAll('li');

    let todos = [];
    todosEL.forEach((todoEL) => {
        todos.push({
            text: todoEL.innerText,
            completed: todoEL.classList.contains('completed')
        });
    });

    localStorage.setItem('todos', JSON.stringify(todos));
}
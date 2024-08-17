const updateTodo = (id, updatedData) => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedData)
    })
    .then(res => res.json())
    .then(data => console.log('Todo updated:', data))
    .catch(error => console.error('Error updating todo:', error));
};

const todos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(data => displayTodos(data))
        .catch(error => console.error('Error fetching todos:', error));
};

const displayTodos = (data) => {
    const todosContainer = document.getElementById('todos-list');
    data.forEach(todo => {
        const todoItem = document.createElement('div');
        todoItem.className = 'p-4 bg-gray-100 rounded shadow';
        todoItem.textContent = todo.title;
        todoItem.addEventListener('click', () => {
            const updatedTitle = prompt('Enter new title:', todo.title);
            if (updatedTitle) {
                updateTodo(todo.id, { title: updatedTitle });
                todoItem.textContent = updatedTitle;
            }
        });
        todosContainer.appendChild(todoItem);
    });
};

todos();
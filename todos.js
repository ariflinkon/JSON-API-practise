async function updateTodoAsync(id, updatedData) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedData)
        });
        if (!response.ok) throw new Error('Failed to update the todo');
        const data = await response.json();
        console.log('Todo updated:', data);
        return data;
    } catch (error) {
        console.error('Error updating todo:', error);
        throw error;
    }
}

async function fetchTodosAsync() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10');
        if (!response.ok) throw new Error('Failed to fetch todos');
        const data = await response.json();
        displayTodos(data);
    } catch (error) {
        console.error('Error fetching todos:', error);
    }
}

function displayTodos(data) {
    const todosContainer = document.getElementById('todos-list');
    todosContainer.innerHTML = ''; // Clear existing todos

    data.forEach(todo => {
        const todoItem = document.createElement('div');
        todoItem.className = 'p-3 bg-white border rounded d-flex justify-content-between align-items-center shadow-sm';

        const title = document.createElement('span');
        title.textContent = todo.title;
        title.className = 'flex-grow-1 me-3';

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'btn btn-sm btn-outline-danger ms-2';

        deleteButton.addEventListener('click', async (e) => {
            e.stopPropagation();
            try {
                await deleteTodoAsync(todo.id);
                todosContainer.removeChild(todoItem);
            } catch (error) {
                console.error('Error deleting todo:', error);
            }
        });

        todoItem.addEventListener('click', async () => {
            const updatedTitle = prompt('Enter new title:', todo.title);
            if (updatedTitle && updatedTitle !== todo.title) {
                try {
                    const updatedTodo = await updateTodoAsync(todo.id, { title: updatedTitle });
                    title.textContent = updatedTodo.title;
                } catch (error) {
                    console.error('Error updating todo:', error);
                }
            }
        });

        todoItem.appendChild(title);
        todoItem.appendChild(deleteButton);
        todosContainer.appendChild(todoItem);
    });
}

async function deleteTodoAsync(id) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
            method: 'DELETE'
        });
        if (!response.ok) throw new Error('Failed to delete the todo');
        console.log(`Todo with id ${id} deleted successfully.`);
    } catch (error) {
        console.error('Error deleting todo:', error);
        throw error;
    }
}

document.getElementById('add-todo').addEventListener('click', async () => {
    const title = prompt('Enter a new todo:');
    if (title) {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    title,
                    completed: false,
                    userId: 1
                })
            });

            if (!response.ok) throw new Error('Failed to create todo');
            const newTodo = await response.json();
            displayTodos([newTodo, ...document.querySelectorAll('#todos-list > div')].map(div => ({
                title: div.querySelector('span')?.textContent || '',
                id: +div.dataset.id || Math.random() * 1000
            })));
        } catch (error) {
            console.error('Error adding todo:', error);
        }
    }
});

fetchTodosAsync();

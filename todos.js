async function updateTodoAsync(id, updatedData) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedData)
        });
        const data = await response.json();
        console.log('Todo updated:', data);
    } catch (error) {
        console.error('Error updating todo:', error);
    }
}

async function fetchTodosAsync() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data = await response.json();
        displayTodos(data);
    } catch (error) {
        console.error('Error fetching todos:', error);
    }
}

function displayTodos(data) {
    const todosContainer = document.getElementById('todos-list');
    data.forEach(todo => {
        const todoItem = document.createElement('div');
        todoItem.className = 'p-4 bg-gray-100 rounded shadow';
        todoItem.textContent = todo.title;
        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'ml-2 bg-red-500 text-white p-1 rounded';
        deleteButton.addEventListener('click', async () => {
            await deleteTodoAsync(todo.id);
            todosContainer.removeChild(todoItem);
        });

        todoItem.appendChild(deleteButton);

        todoItem.addEventListener('click', async () => {
            const updatedTitle = prompt('Enter new title:', todo.title);
            if (updatedTitle) {
                await updateTodoAsync(todo.id, { title: updatedTitle });
                todoItem.textContent = updatedTitle;
                todoItem.appendChild(deleteButton);
            }
        });

        todosContainer.appendChild(todoItem);
    });
}

async function deleteTodoAsync(id) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
            method: 'DELETE'
        });
        if (response.ok) {
            console.log(`Todo with id ${id} deleted successfully.`);
        } else {
            throw new Error('Failed to delete the todo');
        }
    } catch (error) {
        console.error('Error deleting todo:', error);
    }
}

fetchTodosAsync();
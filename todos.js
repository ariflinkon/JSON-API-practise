async function updateTodoAsync(id, updatedData) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedData)
        });
        if (!response.ok) {
            throw new Error('Failed to update the todo');
        }
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
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        if (!response.ok) {
            throw new Error('Failed to fetch todos');
        }
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
        todoItem.className = 'p-4 bg-gray-100 rounded shadow';
        todoItem.textContent = todo.title;
        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'ml-2 bg-red-500 text-white p-1 rounded';
        deleteButton.addEventListener('click', async () => {
            try {
                await deleteTodoAsync(todo.id);
                todosContainer.removeChild(todoItem);
            } catch (error) {
                console.error('Error deleting todo:', error);
            }
        });

        todoItem.appendChild(deleteButton);

        todoItem.addEventListener('click', async () => {
            const updatedTitle = prompt('Enter new title:', todo.title);
            if (updatedTitle) {
                try {
                    const updatedTodo = await updateTodoAsync(todo.id, { title: updatedTitle });
                    todoItem.textContent = updatedTodo.title;
                    todoItem.appendChild(deleteButton);
                } catch (error) {
                    console.error('Error updating todo:', error);
                }
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
        if (!response.ok) {
            throw new Error('Failed to delete the todo');
        }
        console.log(`Todo with id ${id} deleted successfully.`);
    } catch (error) {
        console.error('Error deleting todo:', error);
        throw error;
    }
}

fetchTodosAsync();
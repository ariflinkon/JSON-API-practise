const todos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(data => displayTodos(data))
        .catch(error => console.error('Error fetching todos:', error));
};

const displayTodos = (data) => {
    console.log(data);
};

todos();
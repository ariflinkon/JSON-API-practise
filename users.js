function fetchUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(usersData => {
            console.log(usersData);
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
}

document.getElementById('fetchUsers').addEventListener('click', fetchUsers);
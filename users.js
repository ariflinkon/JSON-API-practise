async function fetchUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const usersData = await response.json();
        displayUsers(usersData);
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

function displayUsers(users) {
    const usersList = document.getElementById('usersList');
    usersList.innerHTML = ''; // Clear any existing content
    users.forEach(user => {
        const listItem = document.createElement('li');
        listItem.textContent = `${user.name} (${user.email})`;
        usersList.appendChild(listItem);
    });
}

document.getElementById('fetchUsers').addEventListener('click', fetchUsers);
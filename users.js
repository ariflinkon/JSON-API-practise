async function fetchUsers() {
    const usersList = document.getElementById('usersList');
    usersList.innerHTML = '<li class="list-group-item">Loading...</li>'; // Bootstrap loading style

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const usersData = await response.json();
        displayUsers(usersData);
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
        usersList.innerHTML = '<li class="list-group-item text-danger">Error loading users</li>'; // Bootstrap error style
    }
}

function displayUsers(users) {
    const usersList = document.getElementById('usersList');
    usersList.innerHTML = ''; // Clear any existing content

    users.forEach(user => {
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item';
        listItem.textContent = `${user.name} (${user.email})`;
        usersList.appendChild(listItem);
    });
}

document.getElementById('fetchUsers').addEventListener('click', fetchUsers);

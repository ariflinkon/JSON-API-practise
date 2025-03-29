async function fetchUsers() {
    const usersList = document.getElementById('usersList');
    usersList.innerHTML = '<li>Loading...</li>'; // Show loading indicator

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        
        // Check if the response is not ok
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        // Parse the JSON data
        const usersData = await response.json();
        
        // Display the users
        displayUsers(usersData);
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
        usersList.innerHTML = '<li>Error loading users</li>'; // Show error message
    }
}

function displayUsers(users) {
    const usersList = document.getElementById('usersList');
    usersList.innerHTML = ''; // Clear any existing content
    
    // Iterate over each user and create a list item
    users.forEach(user => {
        const listItem = document.createElement('li');
        listItem.textContent = `${user.name} (${user.email})`;
        usersList.appendChild(listItem);
    });
}

// Add event listener to the button
document.getElementById('fetchUsers').addEventListener('click', fetchUsers);
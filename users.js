const users = async () => {
    try {
        const fetchRequest = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!fetchRequest.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await fetchRequest.json();
        console.log(data);
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

document.getElementById('fetchUsers').addEventListener('click', users);
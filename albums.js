async function fetchComments() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/albums');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchComments();

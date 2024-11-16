async function fetchComments() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/comments');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching comments:', error);
    }
}

fetchComments();
async function fetchPosts(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching posts:', error);
    }
}

// Call the function with a dynamic URL
fetchPosts('https://jsonplaceholder.typicode.com/posts');
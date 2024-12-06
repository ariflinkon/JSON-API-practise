function fetchPosts(url) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error('Error fetching posts:', error);
        });
}

// Call the function with a dynamic URL
fetchPosts('https://jsonplaceholder.typicode.com/posts');
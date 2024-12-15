async function fetchPosts(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching posts:', error);
        return null;
    }
}

async function displayPosts(url) {
    const posts = await fetchPosts(url);
    if (posts) {
        posts.forEach(post => {
            console.log(`Title: ${post.title}`);
            console.log(`Body: ${post.body}`);
            console.log('---');
        });
    }
}

function logPostTitles(posts) {
    if (posts) {
        posts.forEach(post => {
            console.log(`Title: ${post.title}`);
        });
    }
}

// Call the function with a dynamic URL
displayPosts('https://jsonplaceholder.typicode.com/posts');

// Example usage of the new method
fetchPosts('https://jsonplaceholder.typicode.com/posts').then(logPostTitles);
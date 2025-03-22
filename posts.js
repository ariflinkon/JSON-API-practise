async function fetchPosts(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        return await response.json();
    } catch (error) {
        handleError('Error fetching posts:', error);
        return null;
    }
}

function handleError(message, error) {
    console.error(message, error);
}

async function displayPosts(url) {
    const posts = await fetchPosts(url);
    if (posts) {
        logPostDetails(posts);
    }
}

function logPostTitles(posts) {
    if (posts) {
        posts.forEach(post => {
            console.log(`Title: ${post.title}`);
        });
    }
}

function logPostDetails(posts) {
    if (posts) {
        posts.forEach(post => {
            console.log(`Title: ${post.title}`);
            console.log(`Body: ${post.body}`);
            console.log('---');
        });
    }
}

// Call the function with a dynamic URL
displayPosts('https://jsonplaceholder.typicode.com/posts');

// Example usage of the new method
(async () => {
    const posts = await fetchPosts('https://jsonplaceholder.typicode.com/posts');
    logPostTitles(posts);
})();
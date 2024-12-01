async function fetchComments() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/comments');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching comments:', error);
    }
}

async function fetchCommentsByPostId(postId) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(`Error fetching comments for post ID ${postId}:`, error);
    }
}

function fetchCommentsWithCallback(callback) {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => response.json())
        .then(data => callback(null, data))
        .catch(error => callback(error, null));
}

function fetchCommentsByPostIdWithCallback(postId, callback) {
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
        .then(response => response.json())
        .then(data => callback(null, data))
        .catch(error => callback(error, null));
}

// Example usage with callbacks
fetchCommentsWithCallback((error, data) => {
    if (error) {
        console.error('Error fetching comments:', error);
    } else {
        console.log(data);
    }
});

fetchCommentsByPostIdWithCallback(1, (error, data) => {
    if (error) {
        console.error('Error fetching comments for post ID 1:', error);
    } else {
        console.log(data);
    }
});
async function fetchComments(baseUrl) {
    try {
        const response = await fetch(`${baseUrl}/comments`);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching comments:', error);
    }
}

async function fetchCommentsByPostId(baseUrl, postId) {
    try {
        const response = await fetch(`${baseUrl}/comments?postId=${postId}`);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(`Error fetching comments for post ID ${postId}:`, error);
    }
}

function fetchCommentsWithCallback(baseUrl, callback) {
    fetch(`${baseUrl}/comments`)
        .then(response => response.json())
        .then(data => callback(null, data))
        .catch(error => callback(error, null));
}

function fetchCommentsByPostIdWithCallback(baseUrl, postId, callback) {
    fetch(`${baseUrl}/comments?postId=${postId}`)
        .then(response => response.json())
        .then(data => callback(null, data))
        .catch(error => callback(error, null));
}

// Example usage with callbacks
const baseUrl = 'https://jsonplaceholder.typicode.com';

fetchCommentsWithCallback(baseUrl, (error, data) => {
    if (error) {
        console.error('Error fetching comments:', error);
    } else {
        console.log(data);
    }
});

fetchCommentsByPostIdWithCallback(baseUrl, 1, (error, data) => {
    if (error) {
        console.error('Error fetching comments for post ID 1:', error);
    } else {
        console.log(data);
    }
});
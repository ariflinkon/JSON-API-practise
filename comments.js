async function fetchComments(baseUrl) {
    try {
        const response = await fetch(`${baseUrl}/comments`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching comments:', error);
        throw error;
    }
}

async function fetchCommentsByPostId(baseUrl, postId) {
    try {
        const response = await fetch(`${baseUrl}/comments?postId=${postId}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Error fetching comments for post ID ${postId}:`, error);
        throw error;
    }
}

function fetchCommentsWithCallback(baseUrl, callback) {
    fetch(`${baseUrl}/comments`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => callback(null, data))
        .catch(error => callback(error, null));
}

function fetchCommentsByPostIdWithCallback(baseUrl, postId, callback) {
    fetch(`${baseUrl}/comments?postId=${postId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => callback(null, data))
        .catch(error => callback(error, null));
}

// Example usage with async/await
const baseUrl = 'https://jsonplaceholder.typicode.com';

(async () => {
    try {
        const comments = await fetchComments(baseUrl);
        console.log(comments);
    } catch (error) {
        console.error('Error fetching comments:', error);
    }

    try {
        const commentsByPostId = await fetchCommentsByPostId(baseUrl, 1);
        console.log(commentsByPostId);
    } catch (error) {
        console.error('Error fetching comments for post ID 1:', error);
    }
})();
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

fetchComments();
fetchCommentsByPostId(1);
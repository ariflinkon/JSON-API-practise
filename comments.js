import fetch from 'node-fetch';

// Fetch JSON data from API
fetch('https://jsonplaceholder.typicode.com/comments')
  .then(response => response.json())
  .then(data => {
    const comments = data;
    displayComments(comments);
  })
  .catch(error => console.error('Error:', error));

// Function to display comments
const displayComments = (comments) => {
  comments.forEach(comment => {
    console.log(`Comment ID: ${comment.id}`);
    console.log(`Post ID: ${comment.postId}`);
    console.log(`Name: ${comment.name}`);
    console.log(`Email: ${comment.email}`);
    console.log(`Body: ${comment.body}`);
    console.log('---------------------------');
  });
};
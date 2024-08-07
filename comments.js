const comments = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/comments');
    const data = await response.json();
    console.log(data);
}
comments();
const users = async () => {
    const fetchRequest = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await fetchRequest.json();
    console.log(data);
}
users();
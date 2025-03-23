// ... existing code

const getUserDataFromForm = () => {
  const name = document.getElementById('nameInput').value;
  const body = document.getElementById('bodyInput').value;
  return {
    id: 1, // Assuming the ID is fixed for this example
    name: name || 'Default Name',
    body: body || 'Default body text'
  };
};

const Meals = async () => {
  const userData = getUserDataFromForm();
  const url = 'https://jsonplaceholder.typicode.com/comments/1';
  const options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
  };

  try {
    const data = await fetchData(url, options);
    updateDOM(data);
  } catch (error) {
    // Error handling is already done in fetchData
  }
};

const anotherMethod = () => {
  console.log('This is another method');
  // You can add more functionality here
};

document.getElementById('submit').addEventListener('click', Meals);
const fetchData = async (url, options) => {
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
    throw error;
  }
};

const createMealElement = (data) => {
  const newDiv = document.createElement('div');
  newDiv.id = 'newDiv';
  newDiv.innerHTML = `<h2>${data.name}</h2>
                      <p>${data.body}</p>`;
  return newDiv;
};

const updateDOM = (data) => {
  const container = document.getElementById('meals');
  if (container) {
    const mealElement = createMealElement(data);
    container.appendChild(mealElement);
    console.log(data);
  } else {
    console.error('Container element not found');
  }
};

const getUserData = () => {
  return {
    id: 1,
    name: 'Updated Name',
    body: 'Updated body text'
  };
};

const Meals = async () => {
  const userData = getUserData();
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
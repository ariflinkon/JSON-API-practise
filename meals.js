const Meals = async () => {
  const userData = {
    id: 1,
    name: 'Updated Name',
    body: 'Updated body text'
  };

  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/comments/1', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    myDisplay(data);
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }
}

const myDisplay = (data) => {
  const container = document.getElementById('meals');
  if (container) {
    const newDiv = document.createElement('div');
    newDiv.id = 'newDiv';
    newDiv.innerHTML = `<h2>${data.name}</h2>
                        <p>${data.body}</p>`;
    container.appendChild(newDiv);
    console.log(data);
  } else {
    console.error('Container element not found');
  }
}

const anotherMethod = () => {
  console.log('This is another method');
  // You can add more functionality here
}

document.getElementById('submit').addEventListener('click', Meals);
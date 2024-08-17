const Meals = () => {
  const userData = {
    id: 1,
    name: 'Updated Name',
    body: 'Updated body text'
  };

  fetch('https://jsonplaceholder.typicode.com/comments/1', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
  })
    .then(res => res.json())
    .then(data => myDisplay(data));
}

const myDisplay = (data) => {
  const newDiv = document.createElement('div');
  newDiv.id = 'newDiv';
  newDiv.innerHTML = `<h2>${data.name}</h2>
                      <p>${data.body}</p>`;
  const container = document.getElementById('meals');
  container.appendChild(newDiv);
  console.log(data);
}

document.getElementById('submit').addEventListener('click', Meals);
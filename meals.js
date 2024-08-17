const Meals = () => {
  fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => myDisplay(data));
    
}

const myDisplay = (data) => {
  const newDiv = document.createElement('div');
  newDiv.id = 'newDiv';
  newDiv.innerHTML = `<h2>${data[0].name}</h2>
                      <p>${data[0].body}</p>`;
  const container = document.getElementById('meals');
  container.appendChild(newDiv);
  console.log(data);
}

document.getElementById('submit').addEventListener('click', Meals);
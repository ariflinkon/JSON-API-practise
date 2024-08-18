const disPlayPizza = (data) => {
  const pizzaDiv = document.getElementById('pizzas');
  const pizza = data.meals[0];

  const pizzaCard = document.createElement('div');
  pizzaCard.classList.add('pizza-card');

  const pizzaImage = document.createElement('img');
  pizzaImage.src = pizza.strMealThumb;
  pizzaImage.alt = pizza.strMeal;
  pizzaCard.appendChild(pizzaImage);
 
  const pizzaId = document.createElement('h1');
  pizzaId.textContent = pizza.idMeal;
  pizzaCard.appendChild(pizzaId);

  const pizzaTitle = document.createElement('h2');
  pizzaTitle.textContent = pizza.strMeal;
  pizzaCard.appendChild(pizzaTitle);

  const pizzaInstructions = document.createElement('p');
  pizzaInstructions.textContent = pizza.strInstructions;
  pizzaCard.appendChild(pizzaInstructions);

  pizzaDiv.appendChild(pizzaCard);
};

const pizza = () => {
  fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=pizza')
    .then(res => res.json())
    .then(data => disPlayPizza(data));
};
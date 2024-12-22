const disPlayPizza = (data) => {
  const pizzaDiv = document.getElementById('pizzas');
  if (pizzaDiv && data.meals && data.meals.length > 0) {
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
  } else {
    console.error('Pizza data is not available or container element not found');
  }
};

const pizza = async () => {
  try {
    const res = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=pizza');
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await res.json();
    disPlayPizza(data);
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }
};
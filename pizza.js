const createPizzaCard = (pizza) => {
  const pizzaCard = document.createElement('div');
  pizzaCard.classList.add('pizza-card');

  const pizzaImage = document.createElement('img');
  pizzaImage.src = pizza.strMealThumb;
  pizzaImage.alt = pizza.strMeal;
  pizzaCard.appendChild(pizzaImage);

  const pizzaId = document.createElement('h1');
  pizzaId.textContent = `ID: ${pizza.idMeal}`;
  pizzaCard.appendChild(pizzaId);

  const pizzaTitle = document.createElement('h2');
  pizzaTitle.textContent = pizza.strMeal;
  pizzaCard.appendChild(pizzaTitle);

  const pizzaInstructions = document.createElement('p');
  pizzaInstructions.textContent = pizza.strInstructions;
  pizzaCard.appendChild(pizzaInstructions);

  return pizzaCard;
};

const displayPizzas = (data) => {
  const pizzaDiv = document.getElementById('pizzas');
  if (!pizzaDiv) {
    console.error('Container element not found');
    return;
  }

  pizzaDiv.innerHTML = ''; // Clear previous results

  if (!data.meals || data.meals.length === 0) {
    console.error('Pizza data is not available');
    return;
  }

  data.meals.forEach(pizza => {
    const pizzaCard = createPizzaCard(pizza);
    pizzaDiv.appendChild(pizzaCard);
  });
};

const fetchPizzaData = async (searchTerm = 'pizza') => {
  try {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    displayPizzas(data);
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }
};

// Call the function to fetch and display pizza data with a default search term
fetchPizzaData();
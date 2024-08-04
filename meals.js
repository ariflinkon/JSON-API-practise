const meals = () => {
  fetch('http://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata')
  .then(res => res.json())
  .then(data => {
    const meal = data.meals[0];
    const newDiv = document.createElement('div');
    newDiv.id = 'newDiv';
    newDiv.innerHTML = `<h2>${meal.strMeal}</h2>
                        <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
                        <p>${meal.strInstructions}</p>`;
    container.appendChild(newDiv);
  });
}
meals();

const container = document.getElementById('click');
container.addEventListener('click', () => {
  // No need to add anything here since the meals() function will handle the visual output
});
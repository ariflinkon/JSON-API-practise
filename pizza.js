const food = "Pizza"; // Replace with your desired food
const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${food}`;
console.log(url); // Output: https://www.themealdb.com/api/json/v1/1/search.php?s=Pizza
const disPlayPizza = (data) => {
  console.log(data.meals[0]);
};

const pizza = () => {
  fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
    .then(res => res.json())
    .then(data => disPlayPizza(data));
};

pizza();
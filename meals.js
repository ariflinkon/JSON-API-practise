const meals = () => {

fetch('http://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata')
.then(res => res.json())
.then(data => console.log(data.meals[0]));
}
meals();
const container = document.getElementById('click');
container.addEventListener('click', () => {
  const newDiv = document.createElement('div');
  newDiv.id = 'newDiv'; // Assign an id to the new div for future reference
  container.appendChild(newDiv);
});
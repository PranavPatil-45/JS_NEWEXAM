const form = document.getElementById('recipeForm');
const recipeList = document.getElementById('recipeList');
const recipes = [];

form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const name = document.getElementById('name').value;
  const ingredients = document.getElementById('ingredients').value;
  const instructions = document.getElementById('instructions').value;
  
  const recipe = { name, ingredients, instructions };
  recipes.push(recipe);
  
  displayRecipes();
  form.reset();
});

function displayRecipes() {
  recipeList.innerHTML = '';
  recipes.forEach((recipe, index) => {
    const recipeDiv = document.createElement('div');
    recipeDiv.innerHTML = `
      <h2>${recipe.name}</h2>
      <p><strong>Ingredients:</strong><br>${recipe.ingredients}</p>
      <p><strong>Instructions:</strong><br>${recipe.instructions}</p>
      <hr>
    `;
    recipeList.appendChild(recipeDiv);
  });
}

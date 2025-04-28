# JS_NEWEXAM


---

# Recipe Book

A simple and easy-to-use Recipe Book web application built using **HTML** and **JavaScript**.  
Users can **add**, **view**, and **manage** their favorite recipes all in one place.

## Features

- Add new recipes with a name, ingredients, and instructions.
- Display a list of all added recipes.
- Simple and clean user interface.
- Data stored temporarily in memory (page reload will reset the recipes).

## How to Use

1. Open the `index.html` file in your web browser.
2. Use the form to add a new recipe (enter recipe name, ingredients, and instructions).
3. Click **Add Recipe** to save it to the list.
4. View all added recipes displayed below the form.

## Project Structure

```
/recipe-book
  ├── index.html
  ├── script.js
  └── style.css (optional)
```

- **index.html** — The main HTML file that structures the page.
- **script.js** — Contains JavaScript logic to handle adding and displaying recipes.
- **style.css** (optional) — Adds some basic styling.

## Example Code

**index.html**
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Recipe Book</title>
  <script defer src="script.js"></script>
</head>
<body>
  <h1>Recipe Book</h1>
  <form id="recipeForm">
    <input type="text" id="name" placeholder="Recipe Name" required><br>
    <textarea id="ingredients" placeholder="Ingredients" required></textarea><br>
    <textarea id="instructions" placeholder="Instructions" required></textarea><br>
    <button type="submit">Add Recipe</button>
  </form>
  <div id="recipeList"></div>
</body>
</html>
```

**script.js**
```javascript
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
```


Uploading 2025-04-28 12-35-33.mp4…


## Notes

- No backend/server — purely front-end.
- Refreshing the page will clear the recipes (since they are stored in memory only).
- Future improvements: localStorage support, edit/delete recipes, better styling.

## License

This project is open source and free to use.

---


const loadMeal = (search) => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => displayMeals(data.meals));
};
const displayMeals = (meals) => {
  const mealsContainer = document.getElementById("meal-container");
  mealsContainer.innerText = "";
  meals.forEach((meal) => {
    console.log(meal);
    const mealDiv = document.createElement("div");
    mealDiv.classList.add("col");
    mealDiv.innerHTML = `
    <div class="card">
              <img src="${meal.strMealThumb}" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title"> ${meal.strMeal} </h5>
                <p class="card-text">
                  ${meal.strInstructions.slice(0, 200)}
                </p>
                <p class="card-text border border-danger align-center">Meal Id:
                  ${meal.idMeal}
                </p>
                <p class="card-text border border-warning">Country's Name:
                  ${meal.strArea}
                </p>
              </div>
            </div>
    `;
    mealsContainer.appendChild(mealDiv);
  });
};
const searchFood = () => {
  const searchField = document.getElementById("search-field");
  const searchText = searchField.value;
  loadMeal(searchText);
  searchField.value = "";
};
// loadMeal("a");

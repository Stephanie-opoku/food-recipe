const button = document.querySelector('#submit');
const mealContainer = document.querySelector('.meal-container');

button.addEventListener('click', async () => {
    const search = document.querySelector('#search').value;
    const api = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${search}`;
    
    fetch(api)
        .then(response => response.json())
        .then(data => {
            if (data.meals) {
                renderAllMeals(data.meals, mealContainer);
                (console.log(data.meals.length)) 

            } else {

                console.log('No meals found');
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});

// Function to render a single meal
async function renderData(meal, container) {
    const mealCard = document.createElement('div');
    mealCard.classList.add('meal-card');

    const imgElement = document.createElement('img');
    imgElement.src = meal.strMealThumb;
    imgElement.alt = meal.strMeal;

    const titleElement = document.createElement('h2');
    titleElement.textContent = meal.strMeal;

    mealCard.appendChild(imgElement);
    mealCard.appendChild(titleElement);

    // Append the meal card to the container
    container.appendChild(mealCard);

    // console.log('Rendering data:', meal);
}

// Function to render all meals
async function renderAllMeals(meals, container) {
    console.log('Rendering data:', meals);
    // Clear existing content in the container
    container.innerHTML = '';

    meals.forEach((meal) => {
        console.log('Rendering meal:', meal);
        renderData(meal, container);
    });
}


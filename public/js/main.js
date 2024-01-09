
const button = document.querySelector('#submit')
const content = document.querySelector('#output')

button.addEventListener('click', async()=>{
    const search = document.querySelector('#search').value
    api = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    await fetch(api)
        .then(response => response.json())
        .then(data => {
            if  (data && data.meals && data.meals.length > 0) {
                const meal = data.meals[0]; // Assuming you want to render the first meal
                renderData(meal);
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});


        // function to render data in cards
        async function renderData(meal){
            // const container = document.querySelector('.container')

         

                const mealNameElement = document.getElementById('mealName');
                const imgBtnElement = document.getElementById('imgBtn');
    
                // Update the HTML content with the meal data
                // mealNameElement.innerHTML = meal.strMeal;
                imgBtnElement.src = meal.strMealThumb;
                imgBtnElement.alt = meal.strMeal;
            
 
                 
             
            }        
      










// access the btn and input
const txtcontext = document.querySelector('#txtContent')
const btnSubmit = document.querySelector('#submit')



 
// add event listner
btnSubmit.addEventListener('click',async ()=>{
    // const searchResults = document.querySelector('#search-results'); // Replace '#search-results' with the actual ID or class of your element.
    const searchInput = document.querySelector('#search').value
    const results = await searchMeal(searchInput)
    console.log(results.meals);
    
    if (results.meals) {
        let content = '';
        results.meals.forEach(meal => {
            content += `
                <div class="container">
                    <div class="my-5">
                        <span>${meal.strMeal}</span>
                        <img class="img-fluid rounded-start" id='imgBtn' src="${meal.strMealThumb}" alt="${meal.strMeal}">
                    </div>
                </div>
            `;
        });
        searchResults.innerHTML = content;
    } else {
        searchResults.innerHTML = '<p>No meals found.</p>';
    }
})
   


// search Meal 
const searchMeal=async(searchInput)=>{
    return response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`).then((res) => res.json())
   


}

// fetch(url).then(res=> res.json()).then(res=> {
//     txtcontext.innerHTML = res.reference
//     txtcontext.innerHTML += res.text
// })



// Fetch data from the API based on the search item
// const apiUrl = apiUrlBase + inputValue;
// fetch(apiUrl)
//     .then(response => {
//         if (!response.ok) {
//             throw new Error(`Network response was not ok: ${response.statusText}`);
//         }
//         return response.json();
//     })
//     .then(data => {
//         // Handle the data and update the HTML content
//         displayData(data);
//     })
//     .catch(error => {
//         console.error('Error fetching data:', error);
//     });

// // Function to display data on the webpage
// function displayData(data) {
//     const container = txtcontext

//      // Clear existing content
//      container.innerHTML = '';

//          // Log the received data to the console for debugging
//     console.log('Received data:', data);

//     // Check if 'meals' property exists and is not null
//     if (data.meals !== null) {
//         // Check if 'meals' is an array
//         if (Array.isArray(data.meals)) {
//             // Displaying data with images
//             const content = data.meals.map(item => {
//                 return `
//                     <div>
//                         <h2>${item.strMeal}</h2>
//                         <img src="${item.strMealThumb}" alt="${item.strMeal}">
//                         <p>${item.strInstructions}</p>
//                     </div>
//                 `;
//             }).join('');

//             container.innerHTML = content;
//         } else {
//             console.error('Invalid data format: meals is not an array', data);
//         }
//     } else {
//         console.error('Invalid data format: meals is null', data);
//     }
// }


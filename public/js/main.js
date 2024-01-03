// access the btn and input
const btnSearch = document.querySelector('#search')
const btnSubmit = document.querySelector('#submit')
const txtcontext = document.querySelector('#txtContent')


//  api base point
const apiUrlBase = 'https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata';
 
 // Declare inputValue outside of the event listener
    let inputValue;

 
// add event listner
btnSubmit.addEventListener('click', ()=>{
    let inputValue = btnSearch.value
    // check if user provided content 
   if(inputValue.trim().length < 1){
   alert('please provide content')
   return
}
})


// fetch(url).then(res=> res.json()).then(res=> {
//     txtcontext.innerHTML = res.reference
//     txtcontext.innerHTML += res.text
// })



// Fetch data from the API based on the search item
const apiUrl = apiUrlBase + inputValue;
fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        return response.json();
    })
    .then(data => {
        // Handle the data and update the HTML content
        displayData(data);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });

// Function to display data on the webpage
function displayData(data) {
    const container = txtcontext

     // Clear existing content
     container.innerHTML = '';

         // Log the received data to the console for debugging
    console.log('Received data:', data);

    // Check if 'meals' property exists and is not null
    if (data.meals !== null) {
        // Check if 'meals' is an array
        if (Array.isArray(data.meals)) {
            // Displaying data with images
            const content = data.meals.map(item => {
                return `
                    <div>
                        <h2>${item.strMeal}</h2>
                        <img src="${item.strMealThumb}" alt="${item.strMeal}">
                        <p>${item.strInstructions}</p>
                    </div>
                `;
            }).join('');

            container.innerHTML = content;
        } else {
            console.error('Invalid data format: meals is not an array', data);
        }
    } else {
        console.error('Invalid data format: meals is null', data);
    }
}


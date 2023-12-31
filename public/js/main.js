// access the btn and input
const btnSearch = document.querySelector('#search')
const btnSubmit = document.querySelector('#submit')
const txtcontext = document.querySelector('#txtContent')


// bible api base point
const apiUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata';

txtcontext = 
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



// Fetch data from the API
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

    // Check if 'meals' property exists and is an array
    if (data.meals && Array.isArray(data.meals)) {
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

        container.innerHTML += content;
    } else {
        console.error('Invalid data format:', data);
    }
}


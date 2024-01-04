const img = document.querySelector("img");
let btnSearch = document.querySelector("#btnSearch");
let search = document.querySelector("#search");
let cardDesign = document.querySelector(".body");
let searchResults = document.querySelector("#output");

let api_key = "726fa854";
moviesTitle = [
  "Fast",
  "Mission Impossible",
  "Extraction",
  "Prison Break",
  "Sonic",
  "AKA",
  "SpongeBob",
  "Galaxy",
  "merlin",
  "alien",
  'bad boys',
  'person of interest'

];
async function generateMovie(title) {
  return await fetch(
    `https://www.omdbapi.com/?t=${title}&apikey=${api_key}`
  ).then((res) => res.json());
}

async function createMovies() {
  moviesTitle.forEach(async (title) => {
    const movie = await generateMovie(title);
    const moviesContainer = document.querySelector(".moviesContainer");
    const imgElement = document.createElement("img");
    imgElement.src = movie.Poster;
    imgElement.alt = movie.Title;
    imgElement.classList.add("img-fluid", "rounded-start");

    imgElement.addEventListener("click", () => {
      const altText = imgElement.alt;
      // console.log(`Alt text: ${altText}`);
      cardDesign.innerHTML = `
        <div class="position-absolute top-50 start-50 translate-middle" id="formbox">
        <div class="card mb-2" style="max-width: 940px;">
          <a type="button" class="btn btn-primary position-absolute top-0 end-0" href="">close</a>

            <div class="row g-0">
              <div class="col-md-4">
                <img class="" id="movie-poster" src="${movie.Poster}" class="img-fluid rounded-start" alt="...">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                <span class = 'green'>Title </span>: ${movie.Title}<br><br>
                     <span class = 'green'>Year </span>: ${movie.Year} <br><br>
                     <span class = 'green'>Plot </span>: ${movie.Plot} <br><br>
                     <span class = 'green'>Country </span>: ${movie.Country} <br><br>
                     <span class = 'green'>Language </span>: ${movie.Language} <br><br>
                     <span class = 'green'>Genre </span>: ${movie.Genre} <br><br>
                     <span class = 'green'>Actors </span>: ${movie.Actors} <br><br>
                     <span class = 'green'>Relased </span>: ${movie.Released} <br><br>
                     <span class = 'green'>Runtime </span>: ${movie.Runtime} <br><br>
                     <span class = 'green'>Watch Trailer </span>: <a href="http://youtube.com">${movie.Title}</a> <br><br>
                </div>
              </div>
            </div>
          </div>
    </div>
        `;
      // document.body.appendChild(cardDetails);
    });
    //   console.log(cardDetails);
    moviesContainer.appendChild(imgElement);
  });
}

createMovies();

// Function to get the value from the search input field and check if the movie or show is been found in the api
btnSearch.addEventListener("click", function () {
  let Value = search.value;
  async function generateMovieSearch(movie) {
    movie = Value;
    const res = await fetch(
      `https://www.omdbapi.com/?t=${movie}&apikey=${api_key}`
    ).then((res) => res.json());
    if (res.Response == "True") {
      searchResults.innerHTML = `
            
             <div class="container">
             <div class="my-5">
                <span></span>
                 <img class="img-fluid rounded-start"id='imgBtn' src="${res.Poster}" alt="${res.Title}">
             </div>
            </div>
            `
            const imageBtn = document.querySelector('#imgBtn');
            imageBtn.addEventListener('click',getMovieInfos);
            async function getMovieInfos(){
                    const movie = await generateMovie(imageBtn.alt);
                    cardDesign.innerHTML = `
                    <br>
                  <div class="position-absolute top-50 start-50 translate-middle" id="formbox">
                  <div class="card mb-2" style="max-width: 940px;">
                     <a type="button" class="btn btn-primary position-absolute top-0 end-0" href="">close</a>
                
                      <div class="row g-0">
                        <div class="col-md-4">
                          <img class="" id="movie-poster" src="${movie.Poster}" class="img-fluid rounded-start" alt="...">
                        </div>
                        <div class="col-md-8">
                          <div class="card-body">
                          <span class = 'green'>Title </span>: ${movie.Title}<br><br>
                               <span class = 'green'>Year </span>: ${movie.Year} <br><br>
                               <span class = 'green'>Plot </span>: ${movie.Plot} <br><br>
                               <span class = 'green'>Country </span>: ${movie.Country} <br><br>
                               <span class = 'green'>Language </span>: ${movie.Language} <br><br>
                               <span class = 'green'>Genre </span>: ${movie.Genre} <br><br>
                               <span class = 'green'>Actors </span>: ${movie.Actors} <br><br>
                               <span class = 'green'>Relased </span>: ${movie.Released} <br><br>
                               <span class = 'green'>Runtime </span>: ${movie.Runtime} <br><br>
                               
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  `};
            
            
      // console.log(movie);
    } else {
      Snackbar.show({
        pos: "top-right",
        text: "Movie or TV Show not Found",
        width: "475px",
        actionTextColor: "orange",
        onActionClick: function (element) {
          //Set opacity of element to 0 to close Snackbar
          $(element).css("opacity", 0);
          alert("Clicked Called!");
        },
      });
    }
  }
  generateMovieSearch();
});

//Global Variables.
let searchBar = document.getElementById('searchBar');
let wrap = document.getElementById('result');

//Fetching function
function fetching () {


  // Value of the search bar - Drink name to search for.
      let whatToSearch = searchBar.value;


      // API URL
      let url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${whatToSearch}`;
            fetch(url)
                .then( res => res.json() )     //Json file
                    .then(
                        (data) => {

                            // what happens if no drinks found.
                          if (data.drinks == null) {
                            wrap.innerHTML = `<div class='noDrinks'> <h3> Sorry, no drinks found...</h3></div>` ;
                          } else {
                          //For loop that creates a new card for every drink found.
                          for ( i=0; i <= data.drinks.length; i++){

                            let ing = [data.drinks[i].strIngredient1, data.drinks[i].strIngredient2, data.drinks[i].strIngredient3, data.drinks[i].strIngredient4, data.drinks[i].strIngredient5,
                          data.drinks[i].strIngredient6, data.drinks[i].strIngredient7]
                                let card = document.createElement('div');
                                card.className='card';
                                card.innerHTML=
                                `
                                <div class="fimg"><img src="${data.drinks[i].strDrinkThumb}" alt="img" ></div>
                                <h3>${data.drinks[i].strDrink}</h3>
                                <h5>${data.drinks[i].strCategory}</h5>
                                <strong>Ingredients:</strong>
                                <p>${ing}</p>
                                <strong>How to make:</strong>
                                <p>${data.drinks[i].strInstructions}</p>

                                `;
                                wrap.appendChild(card);
                         }}}
                       )
                  searchBar.value = '';    // Reset the search bar value after function runs.
 }

          // This function resets the results before running 'fetching' so every search is clean.
    function submitted () {
      if (searchBar.value == 0) {
          wrap.innerHTML = `<div class='noDrinks'> <h3> Please enter a valid drink name.</h3></div>` ;
      } else {
              wrap.innerHTML ='';
            fetching();
    }}
  // search button + even listener for the search button.
  let subBut = document.getElementById('subBut');
subBut.addEventListener('click', submitted);

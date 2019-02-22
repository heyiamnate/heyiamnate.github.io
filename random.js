
function random () {
      // API URL
      let url = `https://www.thecocktaildb.com/api/json/v1/1/random.php`;
            fetch(url)
                .then( res => res.json() )     //Json file
                    .then(
                        (data) => {

                          let ing = [data.drinks[0].strIngredient1, data.drinks[0].strIngredient2, data.drinks[0].strIngredient3, data.drinks[0].strIngredient4, data.drinks[0].strIngredient5,
                        data.drinks[0].strIngredient6, data.drinks[0].strIngredient7, data.drinks[0].strIngredient8, data.drinks[0].strIngredient9, data.drinks[0].strIngredient10]

                                let card = document.createElement('div');
                                card.className='cardWide';
                                card.innerHTML=
                                `
                                <div class="fimg"><img src="${data.drinks[0].strDrinkThumb}" alt="img" ></div>
                                <h3>${data.drinks[0].strDrink}</h3>
                                <h5>${data.drinks[0].strCategory}</h5>
                                <strong>Ingredients:</strong>
                                <p>${ing}</p>
                                <strong>How to make:</strong>
                                <p>${data.drinks[0].strInstructions}</p>

                                `;
                                console.log(data.drinks[0].strDrink);
                                wrap.appendChild(card);
                         }
                       )
}

window.addEventListener('load', random);

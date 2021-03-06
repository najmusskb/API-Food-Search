// button click kore niye assa
const searchFood = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;

    // console.log(searchText);
    searchField.value = '';


    // __________________________________________________________________________________
    // api theke data load kora ...........daynamic URL make 

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;

    // console.log(url)

    // fetch Call ____________________________________________________________________

    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.meals));

    // ___________________________________________________________________________________

}


// rearch result window output e dekhano


const displaySearchResult = meals => {

    const searchResult = document.getElementById('search-result');
    meals.forEach(meal => {

        console.log(meal);

        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        
            <div class="card  h-100" >
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
                </div>
            </div>

        `;

        searchResult.appendChild(div);



    })
}
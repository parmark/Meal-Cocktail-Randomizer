var userIngredient = "chicken breast";
var ingredient = userIngredient.replace(" ", "_");
var mealQueryUrl = "https://www.themealdb.com/api/json/v1/1/filter.php?i=" + ingredient;

// Meal Generator Code:
function generateMeal() {

    $.ajax({
    url: mealQueryUrl,
    method: "GET"   

    }).then(function(response) {

        mealsArray = response.meals;
        var randomMeal = mealsArray[Math.floor(Math.random() * mealsArray.length)];
        var mealTitle = randomMeal.strMeal;

        var containerDiv = $("<div class='container'>");
        $("#mealContent").append(containerDiv);

        var titleDiv = $("<div class='title'>");
        $(titleDiv).text(mealTitle);
        $(containerDiv).append(titleDiv);
    });
};

var userLiquor = "bourbon";
var liquor = userLiquor.replace(" ", "_");
var drinkQueryUrl = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + liquor;

function generateCocktail() {
    $.ajax({
        url: drinkQueryUrl,
        method: "GET"
    }).then(function(response) {

        drinksArray = response.drinks;
        var randomDrink = drinksArray[Math.floor(Math.random() * drinksArray.length)];
        var drinkTitle = randomDrink.strDrink;

        var containerDiv = $("<div class='container'>");
        $("#cocktailContent").append(containerDiv);

        var titleDiv = $("<div class='title'>");
        $(titleDiv).text(drinkTitle);
        $(containerDiv).append(titleDiv);

       //we should hard code the container and title divs in the html so that it doesn't keep creating new ones each time, so the user doesn't have to refresh the page.
    });
}



$("#btnSubmit").on("click", function(event){ 
    event.preventDefault();
    generateMeal();
    generateCocktail();
});
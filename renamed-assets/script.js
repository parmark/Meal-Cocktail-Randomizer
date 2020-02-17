

// Meal Generator Code:
function generateMeal() {
    var userIngredient = $("#userIngredient").val();
    var ingredient = userIngredient.replace(" ", "_");
    var mealQueryUrl = "https://www.themealdb.com/api/json/v1/1/filter.php?i=" + ingredient;
    $.ajax({
    url: mealQueryUrl,
    method: "GET"   

    }).then(function(response) {

        mealsArray = response.meals;
        var randomMeal = mealsArray[Math.floor(Math.random() * mealsArray.length)];
        var mealTitle = randomMeal.strMeal;

        $("#mealContent").empty();
        $("#mealContent").append("<img class='image is-100x100' src='"+ randomMeal.strMealThumb +"'>");

        // var titleDiv = $("<div class='title'>");
        $("#mealTitle").text(mealTitle);
        // $(containerDiv).append(titleDiv);
    });
};



function generateCocktail() {
    var userLiquor = $("#userLiquor").val();
    var liquor = userLiquor.replace(" ", "_");
    var drinkQueryUrl = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + liquor;
    $.ajax({
        url: drinkQueryUrl,
        method: "GET"
    }).then(function(response) {

        drinksArray = response.drinks;
        var randomDrink = drinksArray[Math.floor(Math.random() * drinksArray.length)];
        var drinkTitle = randomDrink.strDrink;

        $("#cocktailContent").empty();
        $("#cocktailContent").append($("<img class='image is-100x100' src='"+ randomDrink.strDrinkThumb +"'>"));

        // var titleDiv = $("<div class='title'>");
        $("#cocktailTitle").text(drinkTitle);
        // $(containerDiv).append(titleDiv);

       //we should hard code the container and title divs in the html so that it doesn't keep creating new ones each time, so the user doesn't have to refresh the page.
    });
}

// strMealThumb

$("#btnSubmit").on("click", function(event){ 
    event.preventDefault();
    generateMeal();
    generateCocktail();
});
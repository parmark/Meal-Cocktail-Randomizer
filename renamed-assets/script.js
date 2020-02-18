var mealTitle;
var drinkTitle;


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
        mealTitle = randomMeal.strMeal;

        $("#mealContent").empty();
        $("#mealContent").append("<img class='image is-100x100' src='"+ randomMeal.strMealThumb +"'>");

        // var titleDiv = $("<div class='title'>");
        $("#mealTitle").text(mealTitle);
        // $(containerDiv).append(titleDiv);
    });
};

function generateRandomMeal() {
    var queryUrl = "https://www.themealdb.com/api/json/v1/1/random.php";
    
    $.ajax({
        url: queryUrl,
        method: "GET"   
    
        }).then(function(response) {
            mealTitle = response.meals[0].strMeal;
            $("#mealTitle").text(mealTitle);
            $("#mealContent").empty();
            $("#mealContent").append("<img class='image is-100x100' src='"+ response.meals[0].strMealThumb +"'>");
    });
};

function generateRandomCocktail() {
    var queryUrl = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
    
    
    $.ajax({
        url: queryUrl,
        method: "GET"   
        
    }).then(function(response) {
            drinkTitle = response.drinks[0].strDrink;
            $("#cocktailTitle").text(drinkTitle);
            $("#cocktailContent").empty();
            
            $("#cocktailContent").append("<img class='image is-100x100' src='"+ response.drinks[0].strDrinkThumb +"'>");
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
        drinkTitle = randomDrink.strDrink;

        $("#cocktailContent").empty();
        $("#cocktailContent").append("<img class='image is-100x100' src='"+ randomDrink.strDrinkThumb +"'>");

        // var titleDiv = $("<div class='title'>");
        $("#cocktailTitle").text(drinkTitle);
        // $(containerDiv).append(titleDiv);
    });
}

$("#btnSubmit").on("click", function(event){ 
    event.preventDefault();

    if(!$("#userIngredient").val()) {         
        generateRandomMeal();           
    } else {
        generateMeal()
    };

    if(!$("#userLiquor").val()) {
        generateRandomCocktail(); 
    } else {
        generateCocktail()
    };

});

$("#btnMealSave").on("click", function (event) {        // this button ID needs to be updated to the master's HTML
    event.preventDefault();

    $("#savedMeal").text(mealTitle);
    $("#mealRecipe").text("reciple list placeholder");
    
});

$("#btnDrinkSave").on("click", function (event){        // this button ID needs to be updated to the master's HTML
    event.preventDefault();

    $("#savedCocktail").text(drinkTitle);
    $("#cocktailRecipe").text("recipe list placeholder");
});
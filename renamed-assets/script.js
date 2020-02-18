

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
        $("#mealContent").append("<img class='is-100x100' src='"+ randomMeal.strMealThumb +"'>");

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

$("#btnSubmit").on("click", function(event){ 
    event.preventDefault();
    generateMeal();
    generateCocktail();
});


// Listeners for radio buttons
$(document).on("click", ".mealSearchParams", function() {
    $(".mealSearchParams").removeClass("is-active")
    $(this).addClass("is-active")

    console.log($(this).text())
    console.log("Category")
    if($(this).text().trim() === "Category") {
        console.log("KJHBH")
        $("#userIngredient").attr("placeholder", "e.g., Seafood");
    }
    else if($(this).text().trim() === "Area") {
        $("#userIngredient").attr("placeholder", "e.g., Canadian");
    }
    else if($(this).text().trim() === "Ingredient") {
        $("#userIngredient").attr("placeholder", "e.g., Chicken Breast");
    }
});

$(document).on("click", ".cocktailSearchParams", function() {
    $(".cocktailSearchParams").removeClass("is-active")
    $(this).addClass("is-active")

    if($(this).text().trim() === "Category") {
        $("#userLiquor").attr("placeholder", "e.g., Cocktail");
    }
    else if($(this).text().trim() === "Ingredient") {
        $("#userLiquor").attr("placeholder", "e.g., Gin");
    }
});

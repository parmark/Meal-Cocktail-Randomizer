
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

function generateRandomMeal() {
    var queryUrl = "https://www.themealdb.com/api/json/v1/1/random.php";
    
    $.ajax({
        url: queryUrl,
        method: "GET"   
    
        }).then(function(response) {
            console.log(response.meals.strMeal)
            var mealTitle = response.meals.strMeal;
            $("#mealTitle").text(mealTitle);
            $("#mealContent").empty();
            $("#mealContent").append("<img class='image is-100x100' src='"+ response.meals.strMealThumb +"'>");
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
    });
}
// getCocktailDetails("11007");
function getCocktailDetails(a) {
    var Url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + a;
    $.ajax({
        url: Url,
        method: "GET"
    }).then(function(response){
        // console.log(response)
        for (var prop in response.drinks[0]){
            // console.log(response.drinks[0][prop])
            if (prop === "strInstructions" || (prop.includes("strIngredient") || prop.includes("strMeasure")) && response.drinks[0][prop] !== null) {
            console.log(prop, ":", response.drinks[0][prop]);
            };
        };
    });
};

// getMealDetails("52772")
function getMealDetails(a) {
    var Url = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + a;
    $.ajax({
        url: Url,
        method: "GET"
    }).then(function(response){
        console.log(response.meals[0])
        for (var prop in response.meals[0]){
            // console.log(prop)
            if (prop === "strInstructions" || (prop.includes("strIngredient") || prop.includes("strMeasure")) && response.meals[0][prop] !== null && response.meals[0][prop] !== "") {
            console.log(prop, ":", response.meals[0][prop]);
            };
        };
    });
};

function generateRandomCocktail() {
    var queryUrl = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
    
    $.ajax({
        url: queryUrl,
        method: "GET"   
    
        }).then(function(response) {
            var drinkTitle = response.drinks[0].strDrink;
            $("#cocktailTitle").text(drinkTitle);
            $("#cocktailContent").empty();
            $("#cocktailContent").append("<img class='image is-100x100' src='"+ response.drinks[0].strDrinkThumb +"' alt='" + response.drinks[0].strDrink + "'>");
    });
};

$("#btnSubmit").on("click", function(event){ 
    event.preventDefault();

    if($("#userIngredient") === null) {         
        generateRandomMeal();           
    } else {
        generateMeal()
    };

    if($("#userLiquor").text() === "") {
        generateRandomCocktail();       
    } else {
        generateCocktail()
    };

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

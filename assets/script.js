

var userIngredient = "chicken breast";
var ingredient = userIngredient.replace(" ", "_");
var mealQueryUrl = "https://www.themealdb.com/api/json/v1/1/filter.php?i=" + ingredient;

var userLiquor = "bourbon";
var liquor = userLiquor.replace(" ", "_");
var drinkQueryUrl = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + liquor;

// Meal Generator Code:
function generateMeal() {
    $.ajax({
    url: mealQueryUrl,
    method: "GET"   
    }).then(function(response) {

        // need to create a forEach / var to limit response to 1 entry to display for each drink and meal

        var containerDiv = $("<div class='container'>");
        $("#meal-box").append(containerDiv);

        var titleDiv = $("<div class='title");
        $(containerDiv).append(titleDiv);

        var listDiv = $("<div class='list-div");
        $(listDiv).text()
        $(containerDiv).append(listDiv);

        var newList = $("<ul class='meal-list'>");
        $(containerDiv).append(newList);

        // add li's for EACH ingredient item
    });
};

function generateCocktail() {
    $.ajax({
        url: drinkQueryUrl,
        method: "GET"
    }).then(function(response) {
        //create an individual container
        // title div for name
        // and then ul /li list for ingredients
    });
}



$("#search").on("click", function(event){ //change name of id based on front end's name.
    event.preventDefault();
    generateMeal();
    generateCocktail();
});
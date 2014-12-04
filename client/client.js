var domready = require("domready"),
    RecipeList = require("./RecipeList.jsx"),
    React = require("react");

var recipies = [
    { name: "Spagetti and meatballs" },
    { name: "Oatmeal"},
    { name: "Club sandwich"},
    { name: "Wienersnitzel"}
]

domready(function(){
    var container = document.getElementById("container")
    React.render(<RecipeList recipies={recipies} />, container);
});

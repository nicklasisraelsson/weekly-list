var domready = require("domready"),
    React = require("react"),
    RecipeList = require("./RecipeList.jsx");

domready(function(){
    var container = document.getElementById("container")
    React.render(<RecipeList />, container);
});

var domready = require("domready"),
    React = require("react"),
    request = require("browser-request"),
    RecipeList = require("./RecipeList.jsx");

domready(function(){
    var container = document.getElementById("container")
    request({method: "GET", url: "/recipies", json: true}, function(err, response, body){
        if (err)
            throw err;
        React.render(<RecipeList recipies={body} />, container);
    });
});

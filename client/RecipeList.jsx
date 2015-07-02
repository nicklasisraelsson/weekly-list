var React = require('react'),
    request = require("browser-request"),
    RecipeListItem = require('./RecipeListItem.jsx'),
    AddRecipe = require('./AddRecipe.jsx');

module.exports = React.createClass({
    getInitialState: function(){
        return {
            recipies: []
        };
    },

    componentDidMount: function(){
        this.updateRecipies();
    },

    updateRecipies: function(){
        var self = this;
        request({method: "GET", url: "/recipies", json: true}, function(err, response, body){
            if (err){
                throw err;
            }
            var recipies = body;
            if(self.isMounted()){
                self.setState({
                    recipies: recipies
                });
            }
        });
    },

    handleRecipeAdded: function(recipie){
        var self = this;
        request({method: "POST", url: "/recipies", body: recipie, json: true}, function(err, response, body){
            if (err){
                throw err;
            }
            self.updateRecipies();
        });
    },

    render: function(){
        items = [];
        this.state.recipies.forEach(function(recipe){
            items.push(<RecipeListItem recipe={recipe} />);
        });
        return <div>
            <AddRecipe onRecipeAdd={this.handleRecipeAdded}/>
            <ul>
                {items}
            </ul>
        </div>
    }
});
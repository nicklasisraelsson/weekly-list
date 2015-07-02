var React = require('react');
module.exports = React.createClass({
    render: function(){
        //TODO: Show ingredients on click
        //TODO: Edit button
        var ingredients = this.props.recipe.ingredients.map(function(ingredient){
            return <li>{ingredient}</li>;
        });
        return <li>
            <span>{this.props.recipe.name}</span>
            <ul>
                {ingredients}
            </ul>
        </li>
    }
})
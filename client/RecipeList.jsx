var React = require('react');
module.exports = React.createClass({
    render: function(){
        var recipies = this.props.recipies;
        return <ul>
                    {recipies.map(function(recipe){
                        return <li>{recipe.name}</li>;
                    })}
                </ul>
    }
});
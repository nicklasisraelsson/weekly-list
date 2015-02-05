var React = require('react'),
    RecipeListItem = require('./RecipeListItem.jsx');
module.exports = React.createClass({
    render: function(){
        items = [];
        this.props.recipies.forEach(function(recipe){
            items.push(<RecipeListItem recipe={recipe} />);
        });
        return <ul>
                    {items}
                </ul>
    }
});
var React = require('react');
module.exports = React.createClass({
    render: function(){
        //TODO: Show ingredients on click
        //TODO: Edit button
        return <li>{this.props.recipe.name}</li>
    }
})
var React = require('react');
module.exports = React.createClass({
    render: function(){
        return <li>{this.props.recipe.name}</li>
    }
})
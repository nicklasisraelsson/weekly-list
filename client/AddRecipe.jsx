var React = require("react");
module.exports = React.createClass({

    propTypes: {
        onRecipeAdd: React.PropTypes.func.isRequired
    },

    onSubmit: function(e){
        e.preventDefault();
        var nameElement = this.refs.recipeName.getDOMNode();
        this.props.onRecipeAdd({name: nameElement.value});
        nameElement.value = "";
    },

    render: function(){
        return <form onSubmit={this.onSubmit}>
                <input ref="recipeName" type="text" placeholder="Add recipe..." />
                <input type="submit" value="Add" />
               </form>
    }
})
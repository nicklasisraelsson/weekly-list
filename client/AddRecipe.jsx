var React = require("react");
module.exports = React.createClass({

    propTypes: {
        onRecipeAdd: React.PropTypes.func.isRequired
    },

    onSubmit: function(e){
        e.preventDefault();
        var nameElement = this.refs.name.getDOMNode();
        var recipe = this.getRecipe();
        this.props.onRecipeAdd(recipe);
        this.clearForm();
    },

    getRecipe: function(){
        return {
            name: this.refs.name.getDOMNode().value,
            ingredients: this.refs.ingredients.getDOMNode().value
        }
    },

    clearForm: function(){
        for (var ref in this.refs){
            if (this.refs.hasOwnProperty(ref)){
                this.refs[ref].getDOMNode().value = "";
            }
        }
    },

    render: function(){
        return <form onSubmit={this.onSubmit}>
            <fieldset>
                <legend>Add recipe</legend>
                <p>
                    <label for="name">Name:</label>
                    <input id="name" ref="name" type="text" placeholder="Add recipe..." />
                </p>
                <p>
                    <label for="ingredients">Ingredients:</label>
                    <textarea id="ingredients" ref="ingredients" placeholder="Add ingredients..." />
                </p>
                <p>
                    <input type="submit" value="Add" />
                </p>
            </fieldset>
        </form>
    }
})
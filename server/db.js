var DataStore = require('nedb'),
    recipiesDb = new DataStore({
        // uncomment to persist db to disk instead of memory
        // filename: 'db/recipies.db',
        autoload: true
    });
var db = {
    recipies: recipiesDb,

    initialize: function(){
        this.addRecipie({ name: "Spagetti and meatballs", ingredients: ["Spagetti", "Meatballs"] });
        this.addRecipie({ name: "Wienersnitzel", ingredients: ["Wienersnitzel", "Pommes stripes","Mayo"] });
        this.addRecipie({ name: "Club sandwich", ingredients: ["Bacon", "Chicken", "Tomatoes", "Bread"] });
    },

    addRecipie: function(recipie){
        if (!recipie) throw "no recipe to add";
        recipiesDb.findOne({ name: recipie.name }, function(err, doc){
            if (!doc){
                recipie.addedOn = new Date().getTime();
                recipiesDb.insert(recipie);
            }
        });
    }
}
module.exports = db;

var DataStore = require('nedb'),
    recipiesDb = new DataStore({
        // uncomment to persist db to disk instead of memory
        // filename: 'db/recipies.db',
        autoload: true
    });
var db = {
    recipies: recipiesDb,

    initialize: function(){
        this.addRecipie({ name: "Spagetti and meatballs" });
        this.addRecipie({ name: "Wienersnitzel" });
        this.addRecipie({ name: "Club sandwich" });
    },

    addRecipie: function(recipie){
        if (!recipie) throw "no recipe to add";
        recipiesDb.findOne({ name: recipie.name }, function(err, doc){
            if (!doc){
                recipiesDb.insert(recipie);
            }
        });
    }
}
module.exports = db;

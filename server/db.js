var DataStore = require('nedb'),
    recipiesDb = new DataStore({
        // uncomment to persist db to disk instead of memory
        // filename: 'db/recipies.db',
        autoload: true
    });
var db = {
    recipies: recipiesDb,
    initialize: function(){
        recipiesDb.findOne({ name: "Spagetti and meatballs" }, function(err, doc){
            if (!doc){
                recipiesDb.insert({
                    name: "Spagetti and meatballs"
                })
            }
        });
        recipiesDb.findOne({ name: "Wienersnitzel" }, function(err, doc){
            if (!doc){
                recipiesDb.insert({
                    name: "Wienersnitzel"
                })
            }
        });
        recipiesDb.findOne({ name: "Club sandwich" }, function(err, doc){
            if (!doc){
                recipiesDb.insert({
                    name: "Club sandwich"
                })
            }
        });
    }
}
module.exports = db;

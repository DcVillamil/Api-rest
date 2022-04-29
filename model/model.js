var mongoose = require("mongoose");

const superSchema = mongoose.Schema({
    name: { type: String },
    age: { type: Number },
    country: { type: String },
    genre: {
        type: String
    },
    superpower: {
        type: String
    },
    universe: {
        type: String
    },

});

module.exports = mongoose.model("SuperHero", superSchema);
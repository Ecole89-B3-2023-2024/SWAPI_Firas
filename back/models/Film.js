const mongoose = require("mongoose");

const  filmSchema = new mongoose.Schema(
    {
        title: String,
        episode_id: Number,
        director: String,
        release_date: String,
        opening_crawl: String,
        starships:[{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Starship"
        }],
        vehicles: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Vehicle"
        }],
        planets: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Planet"
        }],
        characters: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "People"
        }],
        species: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Species"
        }]
    },
    {
        timestamps: true,
    }
);

const Film = mongoose.model("Film", filmSchema);
module.exports = Film;
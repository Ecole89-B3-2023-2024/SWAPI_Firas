const mongoose = require("mongoose");

const peopleSchema = new mongoose.Schema(
    {
        name: String,
        gender: String,
        skin_color: String,
        hair_color: String,
        height: String,
        eye_color: String,
        mass: String,
        homeworld:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Planet"
        },
        birth_year: String,
        species: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Species"
        },
        vehicles: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Vehicle"
        },
        starships: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Starships"
        }
    },
    {
        timestamps: true,
    }
);

const People = mongoose.model("People", peopleSchema);
module.exports = People;
const mongoose = require("mongoose");

const speciesSchema = new mongoose.Schema(
    {
        classification: String,
        name: String,
        designation: String,
        eye_colors: [String],
        skin_colors: [String],
        language: String,
        hair_colors: [String],
        homeworld: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Planet"
        },
        average_lifespan: String,
        average_height: String,
    },
    {
        timestamps:true,
    }
)

const Species = mongoose.model("Species", speciesSchema);
module.exports = Species;
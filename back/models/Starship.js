const mongoose = require("mongoose");

const starshipSchema = new mongoose.Schema(
    {
        name: String,
        model: String,
        MGLT: String,
        starship_class: String,
        hyperdrive_rating: String,
        manufacturer: String,
        cost_in_credits: String,
        length: String,
        max_atmosphering_speed: String,
        crew: String,
        passengers: String,
        cargo_capacity: String,
        consumables: String,
    },
    {
        timestamps: true,
    }
);

const Starship = mongoose.model("Starship", starshipSchema);
module.exports = Starship;
const mongoose = require("mongoose");

const planetSchema = new mongoose.Schema(
    {
        climate: String,
        surface_water: String,
        name: String,
        diameter: String,
        rotation_period: String,
        terrain: String,
        gravity: String,
        orbital_period: String,
        population: String,
    },
    {
        timestamps: true
    }
);

const Planet = mongoose.model("Planet",planetSchema);
module.exports = Planet;

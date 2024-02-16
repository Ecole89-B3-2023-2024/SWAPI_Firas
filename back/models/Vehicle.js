const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema(
    {
        vehicle_class: String,
        consumables: String,
        name: String,
        cargo_capacity: String,
        passengers: String,
        max_atmosphering_speed: String,
        crew: String,
        length: String,
        model: String,
        cost_in_credits: String,
        manufacturer: String,
    },
    {
        timestamps: true,
    }
);

const Vehicle = mongoose.model("Vehicle", vehicleSchema);
module.exports = Vehicle;
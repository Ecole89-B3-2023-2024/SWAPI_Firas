const express = require("express");
const Vehicle = require("../models/Vehicle");
const router = express.Router();

router.post("/new", async(req, res) => {
    try {
        const vehicle = new Vehicle(req.body)
        const newvehicle = await vehicle.save();
        return res
        .status(201)
        .json({status: 201, message: "la planète a été enregistrée", data: newvehicle});

    } catch (error) {
        console.log(error);
        res.sendStatus(500);
}
})

router.get("/by_name/:name", async(req, res)=>{
    try {
        const vehicle = await Vehicle.findOne({name: req.params.name}).select("_id");
        res
        .status(200)
        .json({status: 200, message: "ok", result: vehicle});
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
})

module.exports = router;
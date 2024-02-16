const express = require("express");
const Planet = require("../models/Planet");
const router = express.Router();

router.post("/new", async(req, res) => {
    try {
        const planet = new Planet(req.body)
        const newPlanet = await planet.save();
        return res
        .status(201)
        .json({status: 201, message: "la planète a été enregistrée", data: newPlanet});

    } catch (error) {
        console.log(error);
        res.sendStatus(500);
}
})

router.get("/by_name/:name", async(req, res)=>{
    try {
        const planet = await Planet.findOne({name: req.params.name}).select("_id");
        res
        .status(200)
        .json({status: 200, message: "ok", result: planet});
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
})

module.exports = router;
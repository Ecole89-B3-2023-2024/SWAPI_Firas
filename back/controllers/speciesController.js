const express = require("express");
const Species = require("../models/Species");
const router = express.Router();

router.post("/new", async(req, res) => {
    try {
        const species = new Species(req.body)
        const newspecies = await species.save();
        return res
        .status(201)
        .json({status: 201, message: "la planète a été enregistrée", data: newspecies});

    } catch (error) {
        console.log(error);
        res.sendStatus(500);
}
})

router.get("/by_name/:name", async(req, res)=>{
    try {
        const species = await Species.findOne({name: req.params.name}).select("_id");
        res
        .status(200)
        .json({status: 200, message: "ok", result: species});
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
})

module.exports = router;
const express = require("express");
const Starship = require("../models/Starship");
const router = express.Router();

router.post("/new", async(req, res) => {
    try {
        const starship = new Starship(req.body)
        const newStarship = await starship.save();
        return res
        .status(201)
        .json({status: 201, message: "la planète a été enregistrée", data: newStarship});

    } catch (error) {
        console.log(error);
        res.sendStatus(500);
}
})

router.get("/by_name/:name", async(req, res)=>{
    try {
        const starship = await Starship.findOne({name: req.params.name}).select("_id");
        res
        .status(200)
        .json({status: 200, message: "ok", result: starship});
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
})

module.exports = router;
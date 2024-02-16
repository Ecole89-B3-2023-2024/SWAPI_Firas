const express = require("express");
const Film = require("../models/Film");
const router = express.Router();
const axios = require("axios");

router.post("/new", async(req, res) => {
    try {
        for(id in req.body.vehicles){req.body.vehicles[id]=await handle(req.body.vehicles[id], "vehicle")}
        
        for(id in req.body.starships){req.body.starships[id]=await handle(req.body.starships[id], "starship")}
        
        for(id in req.body.species){req.body.species[id]=await handle(req.body.species[id], "species")}
        
        for(id in req.body.characters){req.body.characters[id]=await handle(req.body.characters[id], "people")}

        for(id in req.body.planets){req.body.planets[id]=await handle(req.body.planets[id], "planet")}
        
        console.log(req.body.species)
        const film = new Film(req.body)
        const newfilm = await film.save();
        return res
        .status(201)
        .json({status: 201, message: "le personnage a été enregistré", data: newfilm});
        // return res.status(200).json({message: "ok"})

    } catch (error) {
        console.log(error);
        res.sendStatus(500);
}
})

router.get("/by_name/:name", async(req, res)=>{
    try {
        const film = await film.findOne({name: req.params.name}).select("_id");
        res
        .status(200)
        .json({status: 200, message: "ok", result: film});
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
})

async function handle(url, str){
    try {
        const item = await axios.get(url);
        const result = await axios.get(`http://localhost:3000/${str}/by_name/${item.data.name}`);
        return result.data.result._id        
    } catch (error) {
        return;
    }
}

module.exports = router;
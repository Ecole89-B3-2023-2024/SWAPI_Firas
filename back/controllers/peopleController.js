const express = require("express");
const People = require("../models/People");
const router = express.Router();
const axios = require("axios");

router.post("/new", async(req, res) => {
    try {
        const home = await axios.get(req.body.homeworld)
        
        req.body.homeworld =await handle(home, "planet");

        for(id in req.body.vehicles){req.body.vehicles[id]=await handle(req.body.vehicles[id], "vehicle")}
        
        for(id in req.body.starships){req.body.starships[id]=await handle(req.body.starships[id], "starship")}
        
        for(id in req.body.species){req.body.species[id]=await handle(req.body.species[id], "species")}
        
        console.log(req.body.species)
        const people = new People(req.body)
        const newpeople = await people.save();
        return res
        .status(201)
        .json({status: 201, message: "le personnage a été enregistré", data: newpeople});
        // return res.status(200).json({message: "ok"})

    } catch (error) {
        console.log(error);
        res.sendStatus(500);
}
})

router.get("/by_name/:name", async(req, res)=>{
    try {
        const people = await People.findOne({name: req.params.name}).select("_id");
        res
        .status(200)
        .json({status: 200, message: "ok", result: people});
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
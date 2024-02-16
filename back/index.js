const express = require ("express");
const app = express();
const port = process.env.PORT;
const cors = require("cors");

app.use(cors())
app.use(express.json());
app.listen(port, ()=>console.log(`le serveur répond sur le port ${port}`));

const mongoose = require("mongoose");
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("connection à la bdd établie"))
    .catch((error)=>console.log(error));
   
const planetController = require('./controllers/planetController');
app.use("/planet", planetController);

const vehicleController = require('./controllers/vehicleController');
app.use("/vehicle", vehicleController);

const starshipController = require('./controllers/starshipController');
app.use("/starship", starshipController);

const speciesController = require('./controllers/speciesController');
app.use("/species", speciesController);

const peopleController = require('./controllers/peopleController');
app.use("/people", peopleController);

const filmController = require('./controllers/filmController');
app.use("/film", filmController);
const { Router } = require('express');
const router = Router();
const {Types} = require('../db');

router.get("/", async (req, res) => {
    try {
        const pokemonTypesDB = await Types.findAll(); // ---> FindAll returns an array with data from DB
        res.status(201).json(pokemonTypesDB);
    } catch (error) {
        res.status(404).send("Error while requesting pokemon types")
    }
})

module.exports = router;
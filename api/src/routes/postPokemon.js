const { Router } = require('express'); 
const { postPokemon } = require('../utils/utils');
const { Pokemon , Types } = require("../db");
const router = Router();

router.post("/", async (req, res) => {
    try {
        const dataFromForm = req.body; // --> dataFromForm is an object
        //console.log(dataFromForm);
        let validateName = await Pokemon.findOne({where: {name: dataFromForm.name}})
        if(validateName !== null) return res.status(404).send("This name already exists, try another one.")
        await postPokemon(dataFromForm);
        return res.status(200).send("Pokemon was created succesfully");
    } catch (error) {
        res.status(404).send('Error while creating Pokemon');
    }
})



module.exports = router;
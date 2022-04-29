const express = require('express');
const superSchema = require('../model/model')
const router = express.Router();

//crear
router.post("/crear", (req, res) => {
    const s = superSchema(req.body);
    // console.log(req.body);
    s.save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
});

//traer todos
router.get("/all", (req, res) => {
    superSchema.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
});

//traer un superheroe
router.get("/super/:id", (req, res) => {
    const { id } = req.params;
    superSchema.findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
});

//update
router.put("/actualizar/:id", (req, res) => {
    const { id } = req.params;
    const { name, age, country, superpower, universe } = req.body;
    superSchema.updateOne({ _id: id }, {
            $set: { name, age, country, superpower, universe }
        })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
});

//delete
router.delete("/borrar/:id", (req, res) => {
    const { id } = req.params;
    superSchema.remove({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
});

module.exports = router;
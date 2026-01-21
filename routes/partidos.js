const express = require("express");
const router = express.Router();
const Partido = require("../models/Partido");

// GET - obtener todos los partidos
router.get("/", async (req, res) => {
    const partidos = await Partido.find();
    res.json(partidos);
});

// POST - crear un partido nuevo
router.post("/", async (req, res) => {
    try {
        const nuevo = new Partido(req.body);
        await nuevo.save();
        res.json(nuevo);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;

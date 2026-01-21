import express from 'express';
const router = express.Router();
import Equipo from '../models/Equipo.js';

// CREATE
router.post("/", async (req, res) => {
  try {
    const equipo = new Equipo(req.body);
    await equipo.save();
    res.json(equipo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// READ
router.get("/", async (req, res) => {
  const equipos = await Equipo.find();
  res.json(equipos);
});

// UPDATE
router.put("/:id", async (req, res) => {
  const equipo = await Equipo.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(equipo);
});

// DELETE
router.delete("/:id", async (req, res) => {
  await Equipo.findByIdAndDelete(req.params.id);
  res.json({ message: "Equipo eliminado" });
});

export default router;

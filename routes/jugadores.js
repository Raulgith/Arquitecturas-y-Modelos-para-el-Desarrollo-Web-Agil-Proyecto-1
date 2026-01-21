import express from 'express';
const router = express.Router();
import Jugador from '../models/Jugador.js';

// CREATE
router.post("/", async (req, res) => {
  try {
    const jugador = new Jugador(req.body);
    await jugador.save();
    res.json(jugador);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// READ
router.get("/", async (req, res) => {
  const jugadores = await Jugador.find().populate("idEquipo");
  res.json(jugadores);
});

// UPDATE
router.put("/:id", async (req, res) => {
  const jugador = await Jugador.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(jugador);
});

// DELETE
router.delete("/:id", async (req, res) => {
  await Jugador.findByIdAndDelete(req.params.id);
  res.json({ message: "Jugador eliminado" });
});

export default router;

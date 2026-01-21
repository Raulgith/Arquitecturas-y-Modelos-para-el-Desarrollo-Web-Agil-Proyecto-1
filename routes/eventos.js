import express from "express";
const router = express.Router();
import Evento from "../models/Evento.js";

router.get("/", async (req, res) => {
  const eventos = await Evento.find();
  res.json(eventos);
});

router.post("/", async (req, res) => {
  try {
    const nuevo = new Evento(req.body);
    await nuevo.save();
    res.json(nuevo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;

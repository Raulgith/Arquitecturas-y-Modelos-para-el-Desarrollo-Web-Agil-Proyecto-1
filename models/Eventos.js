import mongoose from "mongoose";

const EventoSchema = new mongoose.Schema({
  minuto: Number,
  tipo: String,
  jugador: String,
  equipo: String
});

export default mongoose.model("Evento", EventoSchema);

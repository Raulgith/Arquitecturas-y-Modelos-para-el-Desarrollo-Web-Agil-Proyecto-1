import mongoose from "mongoose";

const JugadorSchema = new mongoose.Schema({
  nombre: String,
  posicion: String,
  dorsal: Number,
  idEquipo: { type: mongoose.Schema.Types.ObjectId, ref: "Equipo" }
});

export default mongoose.model("Jugador", JugadorSchema);

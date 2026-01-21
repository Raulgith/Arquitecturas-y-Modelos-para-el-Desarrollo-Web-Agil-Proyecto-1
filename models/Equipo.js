import mongoose from "mongoose";

const EquipoSchema = new mongoose.Schema({
  nombre: String,
  ciudad: String,
  entrenador: String
});

export default mongoose.model("Equipo", EquipoSchema);

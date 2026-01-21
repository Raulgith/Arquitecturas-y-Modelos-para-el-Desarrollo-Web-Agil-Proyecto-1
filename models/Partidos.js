const mongoose = require("mongoose");

const partidoSchema = new mongoose.Schema({
    local: String,
    visitante: String,
    fecha: String,   // o Date si quieres
    estadio: String
});

module.exports = mongoose.model("Partido", partidoSchema, "partidos");

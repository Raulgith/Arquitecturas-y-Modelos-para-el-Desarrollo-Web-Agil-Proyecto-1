const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

/* ============================
       MODELOS
============================ */

// Equipos
const equipoSchema = new mongoose.Schema({
    nombre: String,
    ciudad: String,
    entrenador: String
});
const Equipo = mongoose.model("Equipo", equipoSchema, "equipos");

// Jugadores
const jugadorSchema = new mongoose.Schema({
    nombre: String,
    dorsal: Number,
    posicion: String,
    equipo: String
});
const Jugador = mongoose.model("Jugador", jugadorSchema, "jugadores");

// Eventos
const eventoSchema = new mongoose.Schema({
    minuto: Number,
    tipo: String,
    jugador: String,
    equipo: String
});
const Evento = mongoose.model("Evento", eventoSchema, "eventos");

// Partidos
const partidoSchema = new mongoose.Schema({
    local: String,
    visitante: String,
    fecha: String,
    estadio: String
});
const Partido = mongoose.model("Partido", partidoSchema, "partidos");


/* ============================
       CONEXIÓN MONGODB
============================ */
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("BBDD connected"))
    .catch(err => console.log(err));


/* ============================
       RUTAS GET
============================ */

// Equipos
app.get("/api/equipos", async (req, res) => {
    const equipos = await Equipo.find();
    res.json(equipos);
});

// Jugadores
app.get("/api/jugadores", async (req, res) => {
    const jugadores = await Jugador.find();
    res.json(jugadores);
});

// Eventos
app.get("/api/eventos", async (req, res) => {
    const eventos = await Evento.find();
    res.json(eventos);
});

// Partidos
app.get("/api/partidos", async (req, res) => {
    const partidos = await Partido.find();
    res.json(partidos);
});


/* ============================
       SERVIDOR
============================ */
app.listen(8080, () => console.log("Server running on port 8080"));

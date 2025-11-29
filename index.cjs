const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.static(__dirname));

// ----- MODELOS -----
const equipoSchema = new mongoose.Schema({
    nombre: String,
    ciudad: String,
    entrenador: String
});
const Equipo = mongoose.model("Equipo", equipoSchema, "equipos");

const jugadorSchema = new mongoose.Schema({
    nombre: String,
    dorsal: Number,
    posicion: String,
    equipo: String
});

const Jugador = mongoose.model("Jugador", jugadorSchema, "jugadores");


// Conexión MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("BBDD connected"))
    .catch(err => console.log(err));


// ----- RUTAS SOLO DE LECTURA -----
app.get("/api/equipos", async (req, res) => {
    const equipos = await Equipo.find();
    res.json(equipos);
});

app.get("/api/jugadores", async (req, res) => {
    const jugadores = await Jugador.find();
    res.json(jugadores);
});

app.listen(8080, () => console.log("Server running on port 8080"));

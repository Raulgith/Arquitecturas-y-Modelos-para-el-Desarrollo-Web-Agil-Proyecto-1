const API = "http://localhost:8080/api";

// ----- Cargar equipos -----
function cargarEquipos() {
    fetch(`${API}/equipos`)
        .then(res => res.json())
        .then(data => {
            const tbody = document.getElementById("equipos-body");
            tbody.innerHTML = "";

            data.forEach(eq => {
                const fila = `
                    <tr>
                        <td>${eq.nombre}</td>
                        <td>${eq.ciudad}</td>
                        <td>${eq.entrenador}</td>
                    </tr>
                `;
                tbody.innerHTML += fila;
            });
        });
}

// ----- Cargar jugadores -----
function cargarJugadores() {
    fetch(`${API}/jugadores`)
        .then(res => res.json())
        .then(data => {
            const tbody = document.getElementById("jugadores-body");
            tbody.innerHTML = "";

            data.forEach(j => {
                const fila = `
                    <tr>
                        <td>${j.nombre}</td>
                        <td>${j.dorsal}</td>
                        <td>${j.posicion}</td>
                        <td>${j.equipo}</td>
                    </tr>
                `;
                tbody.innerHTML += fila;
            });
        });
}

// --------------------------------
// Cargar EVENTOS
// --------------------------------
if (document.querySelector("#tabla-eventos")) {
  fetch(API + "/eventos")
    .then(res => res.json())
    .then(data => {
      const tbody = document.querySelector("#tabla-eventos tbody");
      data.forEach(ev => {
        tbody.innerHTML += `
          <tr>
            <td>${ev.minuto}</td>
            <td>${ev.tipo}</td>
            <td>${ev.jugador}</td>
            <td>${ev.equipo}</td>
          </tr>`;
      });
    });
}

// --------------------------------
// Cargar PARTIDOS
// --------------------------------
if (document.querySelector("#tabla-partidos")) {
  fetch(API + "/partidos")
    .then(res => res.json())
    .then(data => {
      const tbody = document.querySelector("#tabla-partidos tbody");
      data.forEach(p => {
        tbody.innerHTML += `
          <tr>
            <td>${p.local}</td>
            <td>${p.visitante}</td>
            <td>${p.fecha}</td>
            <td>${p.estadio}</td>
          </tr>`;
      });
    });
}

function toggleMenu() {
  const box = document.querySelector(".menu-box");
  box.style.display = box.style.display === "block" ? "none" : "block";
}
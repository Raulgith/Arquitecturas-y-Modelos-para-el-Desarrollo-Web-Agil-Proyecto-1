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

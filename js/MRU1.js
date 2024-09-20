
// Función para calcular MRU 1
function calcularMRU1() {
const velocidad = parseFloat(document.getElementById("mru-velocidad-1").value);
const tiempo = parseFloat(document.getElementById("mru-tiempo-1").value);

const distancia = velocidad * tiempo;

// Muestra el resultado 1
document.getElementById("resultado-mru-1").textContent = distancia.toFixed(2) + " metros";
}

// Asocia la función de cálculo al botón "Calcular" del MRU 1
document.getElementById("calcular-mru-1").addEventListener("click", calcularMRU1);
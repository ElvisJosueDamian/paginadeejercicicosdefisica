// Función para calcular MRU 2
function calcularMRU2() {
const distancia = parseFloat(document.getElementById("mru-distancia-2").value);
const velocidad = parseFloat(document.getElementById("mru-velocidad-2").value);

const tiempo = distancia / velocidad;

// Muestra el resultado 2
document.getElementById("resultado-mru-2").textContent = tiempo.toFixed(2) + " segundos";
}

// Asocia la función de cálculo al botón "Calcular" del MRU 2
document.getElementById("calcular-mru-2").addEventListener("click", calcularMRU2);
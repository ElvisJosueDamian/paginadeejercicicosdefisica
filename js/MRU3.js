// Función para calcular MRU 3
function calcularMRU3() {
const velocidad = parseFloat(document.getElementById("mru-velocidad-3").value);
const desplazamiento = parseFloat(document.getElementById("mru-desplazamiento-3").value);

const tiempo = desplazamiento / velocidad;

// Muestra el resultado 3
document.getElementById("resultado-mru-3").textContent = tiempo.toFixed(2) + " segundos";
}

// Asocia la función de cálculo al botón "Calcular" del MRU 3
document.getElementById("calcular-mru-3").addEventListener("click", calcularMRU3);
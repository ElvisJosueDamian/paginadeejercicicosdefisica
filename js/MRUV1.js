// Función para calcular la velocidad inicial en MRUV 1
function calcularVelocidadInicialMRUV1() {
const aceleracion = parseFloat(document.getElementById("mruv-aceleracion-1").value);
const tiempo = parseFloat(document.getElementById("mruv-tiempo-1").value);
const velocidadFinal = parseFloat(document.getElementById("mruv-velocidad-final-1").value);

const velocidadInicial = velocidadFinal - (aceleracion * tiempo);

// Muestra el resultado 1 en rojo
const resultadoElement = document.getElementById("resultado-mruv-1");
resultadoElement.textContent = velocidadInicial.toFixed(2) + " m/s";
resultadoElement.style.color = "red";
}

// Asocia la función de cálculo al botón "Calcular" de MRUV 1
document.getElementById("calcular-mruv-1").addEventListener("click", calcularVelocidadInicialMRUV1);
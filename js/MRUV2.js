
// Función para calcular el tiempo de caída en MRUV 2
function calcularTiempoCaidaMRUV2() {
const velocidadInicial = parseFloat(document.getElementById("mruv-velocidad-inicial-2").value);
const aceleracion = parseFloat(document.getElementById("mruv-aceleracion-2").value);
const altura = parseFloat(document.getElementById("mruv-altura-2").value);

// Calcula el tiempo de caída utilizando la fórmula del MRUV
const tiempoCaida = (Math.sqrt((velocidadInicial ** 2) + (2 * aceleracion * altura))) / Math.abs(aceleracion);

// Muestra el resultado 2 en rojo
const resultadoElement = document.getElementById("resultado-mruv-2");
resultadoElement.textContent = tiempoCaida.toFixed(2) + " segundos";
resultadoElement.style.color = "red";
}

// Asocia la función de cálculo al botón "Calcular" de MRUV 2
document.getElementById("calcular-mruv-2").addEventListener("click", calcularTiempoCaidaMRUV2);
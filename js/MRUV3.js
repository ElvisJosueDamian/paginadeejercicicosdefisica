// Función para calcular la aceleración en MRUV
function calcularAceleracionMRUV() {
const velocidadInicial = parseFloat(document.getElementById("mruv-velocidad-inicial").value);
const velocidadFinal = parseFloat(document.getElementById("mruv-velocidad-final").value);
const tiempo = parseFloat(document.getElementById("mruv-tiempo").value);

// Calcula la aceleración utilizando la fórmula de MRUV
const aceleracion = (velocidadFinal - velocidadInicial) / tiempo;

// Muestra el resultado de la aceleración
const resultadoElement = document.getElementById("resultado-aceleracion");
resultadoElement.textContent = aceleracion.toFixed(2);
}

// Asocia la función de cálculo al botón "Calcular Aceleración"
document.getElementById("calcular-aceleracion").addEventListener("click", calcularAceleracionMRUV);
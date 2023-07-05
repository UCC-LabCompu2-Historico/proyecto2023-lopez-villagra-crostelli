/**
 * Conversion de dolares a pesos argentinos.
 * @method cotizacion
 * @param
 * @return (void)
 */

function convertirBlue() {
    var valor = parseFloat(document.getElementById("cantidad").value);
    var resultado = valor * 472;
    alert("El cambio de dólares a pesos es: $" + resultado);
}

function convertirBolsa() {
    var valor = parseFloat(document.getElementById("cantidad").value);
    var resultado = valor * 432;
    alert("El cambio de dólares a pesos es: $" + resultado);
}

function convertirContado() {
    var valor = parseFloat(document.getElementById("cantidad").value);
    var resultado = valor * 438;
    alert("El cambio de dólares a pesos es: $" + resultado);
}

function convertirCripto() {
    var valor = parseFloat(document.getElementById("cantidad").value);
    var resultado = valor * 441;
    alert("El cambio de dólares a pesos es: $" + resultado);
}

function convertirSolidario() {
    var valor = parseFloat(document.getElementById("cantidad").value);
    var resultado = valor * 390;
    alert("El cambio de dólares a pesos es: $" + resultado);
}

/**
 * Dibuja el símbolo del dolar "$" en el canvas.
 * @param (string) id - El id del canvas donde se dibujará el símbolo del dolar.
 * @param (string) color - El color del símbolo del dolar.
 * @returns (void)
 */
function dibujarSimboloDolar(canvasId, color) {
    var canvas = document.getElementById(canvasId);
    var context = canvas.getContext("2d");

    context.font = "100px Arial";
    context.fillStyle = color;
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillText("$", canvas.width / 2, canvas.height / 2);
}

function mostrarAlerta() {
    alert("Usuario registrado");
  }

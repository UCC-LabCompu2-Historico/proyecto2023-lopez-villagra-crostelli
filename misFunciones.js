/**
 * Conversion de dolar blue a pesos argentinos.
 * @method convertirBlue
 * @param
 * @return (void)
 */

function convertirBlue() {
    var valorDolares = parseFloat(document.getElementById("cantidad").value);

    if (isNaN(valorDolares) || valorDolares <= 0) {
        alert("Valores ingresados incorrectos");
        return;
    }

    var valorPesos = valorDolares * 472;

    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");

    context.clearRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = "black";
    context.font = "22px Arial";
    context.textAlign = "center";
    context.textBaseline = "middle";
    var x = canvas.width / 2;
    var y = canvas.height / 2;
    context.fillText("Valor en pesos: $" + valorPesos.toFixed(2), x, y);
}

/**
 * Conversion de dolar bolsa a pesos argentinos.
 * @method convertirBolsa
 * @param
 * @return (void)
 */
function convertirBolsa() {
    var valorDolares = parseFloat(document.getElementById("cantidad").value);

    if (isNaN(valorDolares) || valorDolares <= 0) {
        alert("Valores ingresados incorrectos");
        return;
    }

    var valorPesos = valorDolares * 432;

    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");

    context.clearRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = "black";
    context.font = "22px Arial";
    context.textAlign = "center";
    context.textBaseline = "middle";
    var x = canvas.width / 2;
    var y = canvas.height / 2;
    context.fillText("Valor en pesos: $" + valorPesos.toFixed(2), x, y);
}

/**
 * Conversion de dolar contado con liqui a pesos argentinos.
 * @method convertirContado
 * @param
 * @return (void)
 */
function convertirContado() {
    var valorDolares = parseFloat(document.getElementById("cantidad").value);

    if (isNaN(valorDolares) || valorDolares <= 0) {
        alert("Valores ingresados incorrectos");
        return;
    }

    var valorPesos = valorDolares * 438;

    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");

    context.clearRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = "black";
    context.font = "22px Arial";
    context.textAlign = "center";
    context.textBaseline = "middle";
    var x = canvas.width / 2;
    var y = canvas.height / 2;
    context.fillText("Valor en pesos: $" + valorPesos.toFixed(2), x, y);
}

/**
 * Conversion de dolar cripto a pesos argentinos.
 * @method convertirCripto
 * @param
 * @return (void)
 */
function convertirCripto() {
    var valorDolares = parseFloat(document.getElementById("cantidad").value);

    if (isNaN(valorDolares) || valorDolares <= 0) {
        alert("Valores ingresados incorrectos");
        return;
    }

    var valorPesos = valorDolares * 441;

    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");

    context.clearRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = "black";
    context.font = "22px Arial";
    context.textAlign = "center";
    context.textBaseline = "middle";
    var x = canvas.width / 2;
    var y = canvas.height / 2;
    context.fillText("Valor en pesos: $" + valorPesos.toFixed(2), x, y);
}

/**
 * Conversion de dolar solidario a pesos argentinos.
 * @method convertirSolidario
 * @param
 * @return (void)
 */
function convertirSolidario() {
    var valorDolares = parseFloat(document.getElementById("cantidad").value);

    if (isNaN(valorDolares) || valorDolares <= 0) {
        alert("Valores ingresados incorrectos");
        return;
    }

    var valorPesos = valorDolares * 390;

    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");

    context.clearRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = "black";
    context.font = "22px Arial";
    context.textAlign = "center";
    context.textBaseline = "middle";
    var x = canvas.width / 2;
    var y = canvas.height / 2;
    context.fillText("Valor en pesos: $" + valorPesos.toFixed(2), x, y);
}


function mostrarAlerta() {
    alert("Usuario registrado");
}
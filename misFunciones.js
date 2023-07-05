/**
 * Conversion de dolares a pesos argentinos.
 * @method cotizacion
 * @param
 * @return (void)
 */

function convertirBlue() {
    var valorDolares = parseFloat(document.getElementById("cantidad").value);
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

function convertirBolsa() {
    var valorDolares = parseFloat(document.getElementById("cantidad").value);
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

function convertirContado() {
    var valorDolares = parseFloat(document.getElementById("cantidad").value);
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


function convertirCripto() {
    var valorDolares = parseFloat(document.getElementById("cantidad").value);
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


function convertirSolidario() {
    var valorDolares = parseFloat(document.getElementById("cantidad").value);
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

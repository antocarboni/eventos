var labial = 0;
var rimmel = 0;
var sombras = 0;
var skincare = 0;
var tipo = "";
var resultadoLabiales = 0;
var resultadoRimmel = 0;
var resultadoSombras = 0;
var resultadoSkincare = 0;
var total = 0;

const precioLabial = 5000;
const precioRimmel = 10000;
const precioSombras = 7000;
const precioSkincare = 60000;
const descuento = 0.9;
const iva = 0.19;

function pedirLabial() {
  tipo = "labial";
  labial = parseInt(
    prompt(
      "Labial a eleccion\n\nPrecio unitario: " +
        precioLabial +
        " pesos\nDescuento del 10% para cantidades superiores a 1 Labial\n\nIngrese la cantidad:"
    )
  );
  noEsNumero(labial, tipo);
  resultadoLabiales = calculos(labial, tipo, precioLabial, resultadoLabiales);
  return resultadoLabiales;
}

function pedirRimmel() {
  tipo = "Combos de Rimmel";
  rimmel = parseInt(
    prompt(
      "COMBO DE Rimmel: 3 Rimmel Revlon, 1 Rimmel Loreal, 2 Rimmel Lancome, 1 Rimmel sorpresa\n\nPrecio por combo: " +
        precioRimmel +
        " pesos\nDescuento del 10% para cantidades superiores a 1 combo\n\nIngrese la cantidad:"
    )
  );
  noEsNumero(rimmel, tipo);
  resultadoRimmel = calculos(Rimmel, tipo, precioRimmel, resultadoRimmel);
  return resultadoRimmel;
}

function pedirSombras() {
  tipo = "Combos de Sombras";
  sombras = parseInt(
    prompt(
      "COMBO DE Sombras: Marca Maybelline\n\nPrecio por combo: " +
        precioSombras +
        " pesos\nDescuento del 10% para cantidades superiores a 1 combo\n\nIngrese la cantidad:"
    )
  );
  noEsNumero(sombras, tipo);
  resultadoSombras = calculos(Sombras, tipo, precioSombras, resultadoSombras);
  return resultadoSombras;
}

function pedirSkincare() {
  tipo = "Combos de Skincare";
  skincare = parseInt(
    prompt(
      "COMBO DE Skincare: 1 Tónico, 1 crema hidratante, 2 exfoliantes\n\nPrecio por combo: " +
        precioSkincare +
        " pesos\nDescuento del 10% para cantidades superiores a 1 combo\n\nIngrese la cantidad:"
    )
  );
  noEsNumero(skincare, tipo);
  resultadoSkincare = calculos(
    skincare,
    tipo,
    precioSkincare,
    resultadoSkincare
  );
  return resultadoSkincare;
}

function Cotizacion(cantLabial, cantRimmel, cantSombras, cantSkincare) {
  this.cantLabial = cantLabial;
  this.cantRimmel = cantRimmel;
  this.cantSombras = cantSombras;
  this.cantSkincare = cantSkincare;

  this.composicion = function () {
    console.log(
      "\n\nEste es tu total: " +
        "\n" +
        cantLabial +
        " Labial tipos" +
        "\n" +
        cantRimmel +
        " Combos de Rimmel" +
        "\n" +
        cantSombras +
        " Combos de Sombras" +
        "\n" +
        cantSkincare +
        " Combos de Skincare"
    );
  };

  this.cotizar = function () {
    total =
      resultadoLabiales +
      resultadoRimmel +
      resultadoSombras +
      resultadoSkincare;
    totalIva = total + total * iva;

    console.log(
      "\n\nCOTIZACIÓN FINAL\n\nLabiales | Cantidad: " +
        cantLabial +
        " / Subtotal: " +
        resultadoLabiales +
        " pesos" +
        "\nCOMBOS DE Rimmel | Cantidad: " +
        cantRimmel +
        " / Subtotal: " +
        resultadoRimmel +
        " pesos" +
        "\nCOMBOS DE Sombras | Cantidad: " +
        cantSombras +
        " / Subtotal: " +
        resultadoSombras +
        " pesos" +
        "\nCOMBOS DE Skincare | Cantidad: " +
        cantSkincare +
        " / Subtotal: " +
        resultadoSkincare +
        " pesos" +
        "\n\nTOTAL: " +
        total +
        " pesos" +
        "\nTOTAL + IVA (19%): " +
        totalIva +
        " pesos" +
        "\n\nARREGLO RESUMEN DE CANTIDADES: " +
        arregloResumenCantidades()
    );

    alert(
      "COTIZACIÓN FINAL\n\nLabiales | Cantidad: " +
        cantLabial +
        " / Subtotal: " +
        resultadoLabiales +
        " pesos" +
        "\nCOMBOS DE Rimmel | Cantidad: " +
        cantRimmel +
        " / Subtotal: " +
        resultadoRimmel +
        " pesos" +
        "\nCOMBOS DE Sombras | Cantidad: " +
        cantSombras +
        " / Subtotal: " +
        resultadoSombras +
        " pesos" +
        "\nCOMBOS DE Skincare | Cantidad: " +
        cantSkincare +
        " / Subtotal: " +
        resultadoSkincare +
        " pesos" +
        "\n\nTOTAL: " +
        total +
        " pesos" +
        "\nTOTAL + IVA (19%): " +
        totalIva +
        " pesos" +
        "\n\nARREGLO RESUMEN DE CANTIDADES: " +
        arregloResumenCantidades()
    );
  };
}

function totalCompra() {
  var miCotizacion = new Cotizacion(labial, rimmel, sombras, skincare);
  miCotizacion.cotizar();
  miCotizacion.composicion();
}

function arregloResumenCantidades() {
  var partesCotizacion = [];
  partesCotizacion.push("Labial tipos: " + labial);
  partesCotizacion.push("Combo Rimmel: " + rimmel);
  partesCotizacion.push("Combo Sombras: " + sombras);
  partesCotizacion.push("Combo Skincare: " + skincare);
  partesCotizacion = partesCotizacion.join(" / ");
  return partesCotizacion;
}

function noEsNumero(numero, tipo) {
  if (isNaN(numero) || numero < 0) {
    alert(
      "Debes ingresar una Cantidad de " +
        tipo +
        " válido\nHaz una nueva solicitud"
    );
  }
}

function calculos(cantidad, tipo, precio, resultado) {
  if (cantidad == 1 || cantidad == 0) {
    resultado = cantidad * precio;
    console.log(
      "Cantidad de " +
        tipo +
        ": " +
        cantidad +
        " | Precio: " +
        resultado +
        " pesos"
    );
    alert(
      "Cantidad de " +
        tipo +
        ": " +
        cantidad +
        " | Precio: " +
        resultado +
        " pesos"
    );
  }
  if (cantidad > 1) {
    resultado = cantidad * (precio * descuento);
    console.log(
      "Cantidad de " +
        tipo +
        ": " +
        cantidad +
        " | Precio: " +
        resultado +
        " pesos"
    );
    alert(
      "Cantidad de " +
        tipo +
        ": " +
        cantidad +
        " | Precio: " +
        resultado +
        " pesos"
    );
  }
  return resultado;
}

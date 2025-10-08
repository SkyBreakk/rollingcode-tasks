//FUNCIONES
//===============================
//4 - Par o Impar

function analizarNumero(numero) {
  if (numero % 2 === 0) {
    return `El número ${numero} es par`;
  } else if (numero % 2 === 1) {
    return `El número ${numero} es impar`;
  } else {
    return "Inserte un número entero/valido";
  }
}

//================================
//5 - Mayúscula, Minúscula o ambas
let mayuscula = "AÁBCDEÉFGHIÍJKLMNÑOÓPQRSTUÚÜVWXYZ";
let minuscula = "aábcdeéfghiíjklmnñoópqrstuúüvwxyz";

const analizarCadena = function () {
  let cadenaTexto = prompt("Ingrese una palabra o frase:");
  let tieneMayuscula = false;
  let tieneMinuscula = false;

  if (cadenaTexto === null) {
    return "Por favor ingrese una frase";
  } else {
    for (i = 0; i < cadenaTexto.length; i++) {
      for (x = 0; x < mayuscula.length; x++) {
        if (cadenaTexto[i] === mayuscula[x]) {
          tieneMayuscula = true;
        } else if (cadenaTexto[i] === minuscula[x]) {
          tieneMinuscula = true;
        }
      }
    }

    if (tieneMayuscula && tieneMinuscula) {
      return "Su frase está formada por mayúsculas y minúsculas";
    } else if (tieneMayuscula) {
      return "Su frase está formada por mayúsculas";
    } else if (tieneMinuscula) {
      return "Su frase está formada por minúsculas";
    } else {
      return "Su frase carece de mayúsculas O minúsculas";
    }
  }
};

//=============================
//6 - Los lados del Triángulo

const calcularPerimetro = (
  a = Number(prompt("Ingresar lado A")),
  b = Number(prompt("Ingresar lado B"))
) => 2 * (a + b);

//=============================
//7 - Tablas de multiplicar

const calcularTablas = function () {
  let tabla = Number(prompt("Ingrese la tabla que quiera ver:"));

  if (isNaN(tabla) || tabla === null) {
    console.log("Ingrese un número valido");
  } else {
    console.log(`Tabla del ${tabla}`);
    console.log(`==================`);
    for (let i = 0; i < 10; i++) {
      console.log(`${i + 1} x ${tabla} = ${tabla * (i + 1)}`);
    }
  }
};

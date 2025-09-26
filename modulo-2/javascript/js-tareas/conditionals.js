/* Programa 1 - ¿Positivo o Negativo?
ALGORITMO
--------------
- Entrada: Número cualquiera
- Proceso: Tomo el número de entrada y se lo compara a 0 para determinar si es mayor, menor o igual.
-Salida: Mensaje compartiendo los resultados
*/
let num1 = Number(prompt("Inserte un número"));

switch (true) {
  case num1 > 0:
    console.log(`${num1} es positivo`);
    break;
  case num1 === 0:
    console.log(`Has ingresado 0`);
    break;
  case num1 < 0:
    console.log(`${num1} es negativo`);
    break;
  default:
    console.log("Ingrese un número valido");
    break;
}

/* Programa 2 - Solo para mayores de edad
ALGORITMO
-------------
- Entrada: Edad del usuario
- Proceso: Se compara la edad a 18, estimando si el usuario es mayor o menor de edad
- Salida: Se comunica que puede atender sin problemas si es mayor, o que debe ser acompañado por un tutor si es menor
*/

let edadUsuario = Number(prompt("Ingrese su Edad"));

switch (true) {
  case isNaN(edadUsuario) || edadUsuario < 0:
    console.log("Ingrese una edad valida");
    break;
  case edadUsuario < 10 && edadUsuario >= 0:
    console.log("Es demasiado joven para atender...");
    break;
  case edadUsuario < 18 && edadUsuario >= 10:
    console.log("Tendrá que ser acompañado por un tutor");
    break;
  default:
    console.log("¡Podrá atender sin problemas!");
    break;
}

/* Programa 3 - Compras por mayor
ALGORITMO
--------------
- Datos de entrada: Monto de la compra
- Proceso: Tomo el monto que ingresa el usuario, lo comparo con los valores que pueden tener descuento y se aplica el descuento si toca
- Salida: Un mensaje que diga el descuento aplicado y el monto a pagar
*/

let montoIngresado = Number(prompt("Ingrese el monto total de la compra"));

switch (true) {
  case montoIngresado <= 0:
    console.log("Ingrese un número mayor a 0");
    break;
  case isNaN(montoIngresado):
    console.log("Ingrese un número valido");
    break;
  case montoIngresado < 100:
    console.log(`El monto a pagar es ${montoIngresado}`);
    break;
  case montoIngresado >= 100 && montoIngresado < 300:
    console.log(
      `Tiene un descuento de 5%. El monto a pagar es ${(
        montoIngresado * 0.95
      ).toFixed(2)}`
    );
    break;
  case montoIngresado >= 300 && montoIngresado < 500:
    console.log(
      `Tiene un descuento de 10%. El monto a pagar es ${(
        montoIngresado * 0.9
      ).toFixed(2)}`
    );
    break;
  default:
    console.log(
      `Tiene un descuento de 15%. El monto a pagar es ${(
        montoIngresado * 0.85
      ).toFixed(2)}`
    );
    break;
}

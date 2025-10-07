/* Tarea 1 - Contraseña Segura
ALGORITMO
---------
- Entrada: Pedir al usuario que introduzca una contraseña
- Proceso: Checkear si la contraseña contiene al menos una letra mayúscula y un número
- Salida: Se comunica que la contraseña es valida cuando tiene al menos una letra mayúscula y un número, o que es invalida, explicando qué es lo que falta
*/

let password = prompt("Inserte la contraseña a utilizar:");
let tieneMayuscula = false;
let tieneNumero = false;
let mayuscula = "AÁBCDEÉFGHIÍJKLMNÑOÓPQRSTUÚÜVWXYZ";
let numeros = "1234567890";

// Confirmar si la contraseña tiene por lo menos 6 carácteres
if (password === null || password.length < 6) {
  alert("Su contraseña tiene que tener 6 carácteres o más.");
} else {
  for (let i = 0; i < password.length; i++) {
    // Checkear por mayúsculas
    for (let x = 0; x < mayuscula.length; x++) {
      if (password[i] === mayuscula[x]) {
        tieneMayuscula = true;
      }
    }
    // Checkear por números
    for (let y = 0; y < numeros.length; y++) {
      if (password[i] === numeros[y]) {
        tieneNumero = true;
      }
    }
  }

  // Se avisa si la contraseña es válida o inválida
  if (tieneNumero != true && tieneMayuscula != true) {
    alert(
      "Contraseña Invalida ❌. Tiene que contener como mínimo una letra mayúscula y un número."
    );
  } else if (tieneMayuscula != true) {
    alert(
      "Contraseña Invalida ❌. Tiene que contener como mínimo una letra mayúscula."
    );
  } else if (tieneNumero != true) {
    alert("Contraseña Invalida ❌. Tiene que contener como mínimo un número.");
  } else {
    alert("Contraseña Valida ✅");
  }
}

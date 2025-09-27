/* Tarea 1 - Contraseña Segura
ALGORITMO
---------
- Entrada: Pedir al usuario que introduzca una contraseña
- Proceso: Checkear si la contraseña contiene al menos una letra mayúscula y un número
- Salida: Se comunica que la contraseña es valida cuando tiene al menos una letra mayúscula y un número, o que es invalida, explicando qué es lo que falta
*/

let password = prompt("Inserte la contraseña a utilizar:");
let tieneMayus = false;
let tieneNum = false;
let mayus = "AÁBCDEÉFGHIÍJKLMNÑOÓPQRSTUÚÜVWXYZ";
let nums = "1234567890";

// Confirmar si la contraseña tiene por lo menos 6 carácteres
if (password.length < 6) {
  alert("Su contraseña tiene que tener 6 carácteres o más.");
} else {
  for (let i = 0; i < password.length; i++) {
    // Checkear por mayúsculas
    for (let j = 0; j < mayus.length; j++) {
      if (password[i] === mayus[j]) {
        tieneMayus = true;
      }
    }
    // Checkear por números
    for (let k = 0; k < mayus.length; k++) {
      if (password[i] === nums[k]) {
        tieneNum = true;
      }
    }
  }

  // Se avisa si la contraseña es válida o inválida
  if (tieneNum != true && tieneMayus != true) {
    alert(
      "Contraseña Invalida ❌. Tiene que contener como mínimo una letra mayúscula y un número."
    );
  } else if (tieneMayus != true) {
    alert(
      "Contraseña Invalida ❌. Tiene que contener como mínimo una letra mayúscula."
    );
  } else if (tieneNum != true) {
    alert("Contraseña Invalida ❌. Tiene que contener como mínimo un número.");
  } else {
    alert("Contraseña Valida ✅");
  }
}

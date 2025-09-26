// Declaración de variables
let esMayorDeEdad, puedeConducir;
let edad = 19;
let tieneLicencia = true;

// Si es mayor de edad
if (edad >= 18) {
  esMayorDeEdad = `Si es mayor de Edad`;
} else {
  esMayorDeEdad = `No es Mayor de Edad`;
}

// Si puede conducir
if (esMayorDeEdad == `Si es mayor de Edad` && tieneLicencia == true) {
  puedeConducir = `Si puede conducir`;
} else {
  puedeConducir = `No puede conducir`;
}

// Printear los resultados a la consola
console.log(esMayorDeEdad);
console.log(puedeConducir);

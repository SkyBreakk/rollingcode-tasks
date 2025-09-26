// Tarea 1

let apellido = prompt("Ingrese su Apellido");

console.log(`Su apellido tiene ${apellido.length} carácteres`);
console.log(`La última letra de su apellido es: ${apellido.at(-1)}`);

// ---------------------------
// Tarea 2

// let palabra = prompt("Inserte su palabra favorita");
let palabra = "marmota";

console.log(palabra.toUpperCase());
console.log(palabra.at(0).toUpperCase() + palabra.slice(1));

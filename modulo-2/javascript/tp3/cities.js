//ARREGLOS
//2 - Arreglo de Ciudades

let ciudades = [];
let nuevaCiudad;
let numeroCiudades = 0;

do {
  nuevaCiudad = prompt(
    `Ingresó ${numeroCiudades} ciudad/es. Presione cancelar para terminar.`
  );

  if (nuevaCiudad) {
    ciudades.push(nuevaCiudad);
    numeroCiudades++;
  }
} while (nuevaCiudad != null);

if (numeroCiudades >= 3) {
  console.log(`El arreglo de ciudades tiene ${numeroCiudades} elementos`);
  console.log(` · Elemento en 1er posición: ${ciudades.at(0)}`);
  console.log(` · Elemento en 3er posición: ${ciudades.at(2)}`);
  console.log(` · Elemento en última posición: ${ciudades.at(-1)}`);
  console.log("");

  ciudades.push("Paris");
  console.log("Se añadió una nueva ciudad en último lugar:");
  console.log(` · Nuevo elemento en última posición: ${ciudades.at(-1)}`);

  console.log("");
  console.log("Arreglo de ciudades");
  console.log("");
  for (let i = 0; i < ciudades.length; i++) {
    console.log(` · Elemento: ${ciudades[i]}`);
  }
} else {
  console.log(
    "Elementos insuficientes. Por favor ingrese por lo menos 3 ciudades..."
  );
}

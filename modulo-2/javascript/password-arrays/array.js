let pilotosF1 = [
  "Carlos Sainz",
  "Russel",
  "Gabriel Bortoleto",
  "Isack Hadja",
  "Fernando Alonso",
  "Pérez",
  "Lewis Hamilton",
];
let indice;

let pilotosCopia = pilotosF1.slice();
let pilotosAlf = pilotosCopia.sort();
console.log("Lista de pilotos");
console.log("================");
for (let i = 0; i < pilotosAlf.length; i++) {
  console.log(`${i + 1} - ${pilotosAlf[i]}`);
}

console.log("");
console.log("En 3er y 5to puesto vienen...");
console.log(`¡¡${pilotosF1[2]} Y ${pilotosF1[4]}!!`);

pilotosF1.push("Pierre Gasly", "Valtteri Bottas", "Lance Stroll");
console.log("");
console.log("¡Se unen tres nuevos pilotos a la carrera!");
console.log("================");
for (let i = 0; i < pilotosF1.length; i++) {
  console.log(`${i + 1} - ${pilotosF1[i]}`);
}

indice = pilotosF1.indexOf("Lewis Hamilton");
pilotosF1.splice(indice, 1);
pilotosF1.unshift("Lewis Hamilton");
console.log("");
console.log("Lewis Hamilton sube a 1er puesto");
console.log("================");
for (let i = 0; i < pilotosF1.length; i++) {
  console.log(`${i + 1} - ${pilotosF1[i]}`);
}

indice = pilotosF1.indexOf("Russel");
pilotosF1.splice(indice, 1);
pilotosF1.splice(5, 0, "Russel");
console.log("");
console.log("Russel baja al 6to puesto");
console.log("================");
for (let i = 0; i < pilotosF1.length; i++) {
  console.log(`${i + 1} - ${pilotosF1[i]}`);
}

indice = pilotosF1.indexOf("Carlos Sainz");
pilotosF1.splice(indice, 1);
console.log("");
console.log(
  "Carlos Sainz se tendrá que retirar de la carrera por desperfectos"
);
console.log("================");
for (let i = 0; i < pilotosF1.length; i++) {
  console.log(`${i + 1} - ${pilotosF1[i]}`);
}

indice = pilotosF1.indexOf("Fernando Alonso");
pilotosF1.splice(indice, 1);
indice = pilotosF1.indexOf("Gabriel Bortoleto");
pilotosF1.splice(indice, 1, "Fernando Alonso");
console.log("");
console.log(
  "Fernando Alonso sube a 2do puesto rápidamente y saca de la carrera a Gabriel Bortoleto"
);
console.log("================");
for (let i = 0; i < pilotosF1.length; i++) {
  console.log(`${i + 1} - ${pilotosF1[i]}`);
}

indice = pilotosF1.indexOf("Pérez");
pilotosF1.splice(indice, 1);
pilotosF1.push("Pérez");
console.log("");
console.log("Pérez se retrasó en boxes y quedó en último lugar");
console.log("================");
for (let i = 0; i < pilotosF1.length; i++) {
  console.log(`${i + 1} - ${pilotosF1[i]}`);
}

let podio = pilotosF1.slice(0, 3);
console.log("");
console.log("Y los resultados de la carrera son...");
console.log("================");
for (let i = 0; i < podio.length; i++) {
  console.log(`${i + 1}º PUESTO - ${podio[i]}`);
}

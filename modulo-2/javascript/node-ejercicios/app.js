import { superheroe, usuario } from "./datos.js";

// Ejercicio nº1 - Precios y Existencias

let productos = [];

class Producto {
  constructor(id, nombre, detalle, marca, precio, stock) {
    this.id = id;
    this.name = nombre;
    this.detail = detalle;
    this.brand = marca;
    this.price = precio;
    this.stock = stock;

    productos.push(this);
  }

  static sumaPrecios(array) {
    return array.reduce((acumulador, precio) => acumulador + precio.price, 0);
  }

  static stockExistencias(array) {
    return array.filter((producto) => producto.stock > 0);
  }
}

const producto001 = new Producto(
  1,
  "Nintendo Switch 2",
  "Consola de Videojuegos",
  "Nintendo",
  1250,
  50
);
const producto002 = new Producto(
  2,
  "Notebook HP",
  "Computadora Portatil",
  "HP",
  1000,
  0
);
const producto003 = new Producto(
  3,
  "Samsung A30",
  "Teléfono Celular",
  "Samsung",
  350,
  0
);
const producto004 = new Producto(
  4,
  "Airpods Max 3",
  "Auriculares inalambricos",
  "Apple",
  100,
  40
);
const producto005 = new Producto(
  5,
  "Televisor LG TV",
  "Televisor de alta resolución",
  "LG",
  2000,
  20
);

console.log(
  `El precio de los productos suman en total: $${Producto.sumaPrecios(
    productos
  )}`
);
console.log(Producto.stockExistencias(productos));

console.log("");

// Ejercicio nº2 - El mayor valor

let num1 = [23, 56, 3, 67];
let num2 = [100, 456, 2, 347];
let num3 = [...num1, ...num2];

console.log(`El valor más alto entre num1 y num2 es: ${Math.max(...num3)}`);

console.log("");

// Ejercicio nº3 - Construcción y Deconstrucción

const myVehicle = {
  brand: "Ford",
  model: "Mustang",
  color: "red",
};
const updateMyVehicle = {
  type: "car",
  year: 2021,
  color: "yellow",
};

const { brand } = myVehicle;
const myNewVehicle = { brand, ...updateMyVehicle };
console.log(myNewVehicle);

console.log("");

//Ejercicio nº4 - Operaciones Ternarias

let isActive = false;
if (isActive) {
  console.log("Activado");
} else {
  console.warn("No está activado");
}

isActive ? console.log("Activado") : console.warn("No está activado");

console.log("");

// Ejercicio nº5 - Exportación e Importación

const { alias, nombre } = superheroe;
const { username, email, company } = usuario;

console.log(`Mi nombre es ${nombre} y soy ${alias}`);

console.log(`Usuario: ${username}`);
console.log(`Email: ${email}`);
console.log(`Compañia: ${company.name}`);

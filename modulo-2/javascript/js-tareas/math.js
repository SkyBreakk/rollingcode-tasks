// let num1 = 1;
let num1 = Number(prompt("Inserte un número con 5 o más digitos:"));
console.log(`Su número es: ${num1}`);

//Redondeado para abajo
console.log(Math.floor(num1));
//Dos Decimales
console.log(num1.toFixed(2));
//Al cuadrado
console.log(Math.pow(num1, 2));
//Raíz
console.log(Math.sqrt(num1));
//Mult. por un número aleatorio de 1 a 9
console.log(num1 * (Math.floor(Math.random() * 9) + 1));

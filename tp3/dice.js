//ARREGLOS
//3 - Suma de dados
let dado1, dado2, sumaDados;
let resultadoApariciones = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

for (let i = 0; i < 50; i++) {
  dado1 = Math.floor(Math.random() * 6) + 1;
  dado2 = Math.floor(Math.random() * 6) + 1;
  sumaDados = dado1 + dado2;

  switch (sumaDados) {
    case 2:
      resultadoApariciones[0]++;
      break;
    case 3:
      resultadoApariciones[1]++;
      break;
    case 4:
      resultadoApariciones[2]++;
      break;
    case 5:
      resultadoApariciones[3]++;
      break;
    case 6:
      resultadoApariciones[4]++;
      break;
    case 7:
      resultadoApariciones[5]++;
      break;
    case 8:
      resultadoApariciones[6]++;
      break;
    case 9:
      resultadoApariciones[7]++;
      break;
    case 10:
      resultadoApariciones[8]++;
      break;
    case 11:
      resultadoApariciones[9]++;
      break;
    default:
      resultadoApariciones[10]++;
      break;
  }
}

console.log("Suma 🎲🎲 // Apariciones");
for (let i = 0; i <= 10; i++) {
  console.log(`     ${i + 2}     //     ${resultadoApariciones[i]}`);
}

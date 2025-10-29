const display = document.getElementById("display");
const operators = ["+", "-", "/", "x"];

let amountDecimals = 0;

function addToDisplay(key) {
  //Borra el 0 por defecto
  if (
    (display.value === "0" && !isNaN(key)) ||
    display.value === "ERROR" ||
    display.value === "Infinity" ||
    display.value === "NaN"
  ) {
    display.value = "";
  }

  decimalCounter(key);

  handleRepetition(key);

  display.value += key;
}

//Ver si hay un decimal después del operador más recientes
function decimalCounter(key) {
  switch (key) {
    case ".":
      amountDecimals++;
      break;
    case "+":
    case "-":
    case "x":
    case "/":
      amountDecimals = 0;
      break;
  }
}

//Manejar repetición de carácteres especiales
function handleRepetition(key) {
  //Si se intenta escribir un operario tras otro
  if (
    (operators.some((operator) => display.value.at(-1) === operator) ||
      display.value.at(-1) === ".") &&
    operators.some((operator) => key === operator)
  ) {
    display.value = display.value.slice(0, -1);
    // Si se intenta escribir un segundo decimal en el número actual
  } else if (amountDecimals === 2) {
    let lastDecimal = display.value.lastIndexOf(".");

    display.value =
      display.value.slice(0, lastDecimal) +
      display.value.slice(lastDecimal + 1);
    amountDecimals--;
  } else if (
    //Si intenta escribir decimal después de un operador
    operators.some((operator) => display.value.at(-1) === operator) &&
    key === "."
  ) {
    let lastDecimal = display.value.lastIndexOf(".");

    display.value = display.value.slice(0, -1);
    display.value =
      display.value.slice(0, lastDecimal) +
      display.value.slice(lastDecimal + 1);
    amountDecimals--;
  }
}

//Calcular Operación
function calculateOperation() {
  //Reemplazar la x por *
  display.value = display.value.replaceAll("x", "*");

  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "ERROR";
  }
}

//Limpiar el display de la calculadora
function clearDisplay() {
  //Retorna al display a 0
  display.value = "0";
}

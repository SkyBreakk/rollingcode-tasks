const display = document.getElementById("display");

function addToDisplay(button) {
  //Borra el 0 por defecto
  if ((display.value == "0" && button !== ".") || display.value === "ERROR") {
    display.value = "";
  }

  display.value += button;
}

function calculateOperation() {
  display.value = display.value.replaceAll("x", "*");

  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "ERROR";
  }
}

function clearDisplay() {
  //Retorna al display a 0
  display.value = "0";
}

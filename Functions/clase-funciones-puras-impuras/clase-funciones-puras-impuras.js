//  Funciones puras

// Side effects
// 1. Modificar variables lobales
// 2. Modificar parametros
// 3. Solicitudes Https APIS
// 4. Impirmir mensajes en pantalla o consola
// 5. Manipulacion del DOM
// 6. Obtener la hora actual

function sum(a, b) {
  return a + b;
}

// Funciones impuras

function sum(a, b) {
  console.log("A : ", a);
  return a + b;
}

// Modificar variables globales
let total = 0;
function sumWithSideEffect(a) {
  // total = total + a
  total += a;
  return total;
}

// Funciones puras

function square(x) {
  return x * x;
}
function addTen(y) {
  return y + 10;
}

const number = 5;

const finalResult = addTen(square(number));
console.log(finalResult);

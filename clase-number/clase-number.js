// 1. Tipo entero y decimal

const entero = 42;
const decimal = 3.14;

console.log(typeof entero, typeof decimal);

// 2. Notacion cientifica
const cientifico = 5e3;
console.log(cientifico);

// 3. infinitos y NaN
const infinito = Infinity;
const NoEsNumero = NaN;

// Operaciones aritmeticas

// 1. Suma resta multiplicacion y division
const suma = 3 + 4;
const resta = 4 - 4;
const multiplicacion = 4 * 7;
const division = 4 / 8;

// 2. Modulo y exponenciacion

const modulo = 15 % 8;
console.log(modulo);
// arroja el resto de la division
const exponenciacion = 4 ** 3;

// Precision
const resultado = 0.1 + 0.3;
console.log(resultado);
console.log(resultado.toFixed(2));
console.log(resultado === 0.4);

// Operaciones avanzadas
const RaizCuadradad = Math.sqrt(16);
const ValorAbsoluto = Math.abs(-7);
const Aleatorio = Math.random();
console.log(RaizCuadradad);
console.log(ValorAbsoluto);
console.log(Aleatorio);

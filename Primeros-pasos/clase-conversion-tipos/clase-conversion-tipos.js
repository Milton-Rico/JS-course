// Explicit Typo Casting

const string = "42";
const integer = parseInt(string);
console.log(integer);
console.log(typeof integer);

const stringDecimal = "3.14";
const float = parseFloat(stringDecimal);
console.log(float);
console.log(typeof float);

const binary = "1010";
const decimal = parseInt(binary, 2);
console.log(decimal);
console.log(typeof decimal);

// Implicit Typo Casting

const suma = "5" + 3;
console.log(suma);

const sumWhitBoolean = "3" + true;
console.log(sumWhitBoolean);

const sumWhitNumber = 3 + true;
console.log(sumWhitNumber);

const stringValue = "10";
const numberVlaue = 10;
const booleanValue = true;

console.log(stringValue + stringValue);
console.log(stringValue + numberVlaue);
console.log(stringValue + booleanValue);

console.log(numberVlaue + stringValue);
console.log(numberVlaue + numberVlaue);
console.log(numberVlaue + booleanValue);

console.log(booleanValue + stringValue);
console.log(booleanValue + numberVlaue);
console.log(booleanValue + booleanValue);

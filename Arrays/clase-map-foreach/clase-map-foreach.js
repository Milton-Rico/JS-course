// Methods tha iterate over an array
// Methods that DO NOT modify the original array (Inmutability)

// map()
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map((num) => num * num);

console.log(numbers);
console.log(squaredNumbers);

// forEach()

const colors = ["red", "pink", "blue"];
const iterateColors = colors.forEach((color) => console.log(color));
console.log(iterateColors);

// Exercise: Fahrenheit to Celcius conversion
const temperaturesInFahrenheit = [32, 68, 95, 212];
const temperaturesInCelsius = temperaturesInFahrenheit.map(
  (fahrenheit) => (5 / 9) * (fahrenheit - 32)
);

console.log("Temperatures in Fahrenheit: ", temperaturesInFahrenheit);
console.log("Temperatures in Celsius: ", temperaturesInCelsius);

// Exercise: Sum of elements in an array

const newNumbers = [1, 2, 3, 4, 5];
let sum = 0;

newNumbers.forEach((num) => {
  sum += num;
});

console.log("Array of numbers: ", newNumbers);
console.log("Sum of numbers: ", sum);

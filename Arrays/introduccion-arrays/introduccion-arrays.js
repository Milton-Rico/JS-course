// How to create an Array?
// 1. New Array() or Array()
const fruits = Array("apple", "banana", "orange");
console.log(fruits);

const justOneNumber = Array(12);
console.log(justOneNumber);

const number = Array(1, 2, 3, 4, 5);
console.log(number);

// Array literal syntax
const oneNumber = [4];
console.log(oneNumber);

const emptyArray = [];
console.log(emptyArray);

const sports = ["soccer", "tennis", "rugby"];
console.log(sports);

const recipeIngredients = [
  "Fluor",
  true,
  2,
  { ingredient: "Milk", quantity: "1 cup" },
  false,
];
console.log(recipeIngredients);

// Accesing arrays elements
const firstFruit = fruits[1];
console.log(firstFruit);

const numbreOfFruits = fruits.length;
console.log(numbreOfFruits);

// Mutability
fruits.push("watermelon");
console.log(fruits);

// Inmutability
const newFruits = fruits.concat("grape", "kiwi");
console.log(fruits);
console.log(newFruits);

// Checking arrays with Array.isArray()

const isArray = Array.isArray(fruits);
console.log(isArray);

// Practical exercise: sum all elements of an array

const numberArray = [1, 2, 3, 4, 5];
let sum = 0;

for (let i = 0; i < numberArray.length; i++) {
  sum += numberArray[i];
}
console.log(sum);

//Methods that modify the original array (mutability)

// 1. push()

const countries = Array("usa", "canada", "uk");
const newCountries = countries.push("germany", "australia");

console.log(countries);
console.log(newCountries);

// 2. pop()
const removeCountry = countries.pop();
console.log(countries);
console.log(removeCountry);

// const persona = {
//   nombre: "Diego",
//   apellido: "De Granda",
// };
// Cuando se requiere construir un mismo objeto con propiedades iguales muchas veces se usa la funcion constructura que inicia con la primer letra mayuscula

function Persona(nombre, apellido, edad) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.edad = edad;
}

// Generar una instancia, que viene de la funcion constructura
const persona1 = new Persona("Juan", "Perez", 30);
console.log(persona1);

const persona2 = new Persona("Diego", "De Granda", 35);
console.log(persona2);

Persona.prototype.telefono = "555-555-5555";
console.log(persona1);

persona1.nacionalidad = "Mexicano ";

// Agregar un metodo a un constructor
Persona.prototype.saludar = function () {
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
};

persona2.saludar();

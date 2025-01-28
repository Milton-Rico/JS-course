/*

Estructura de datos 
key / value

objeto {
  propiedad: valor,
  propiedad: valor,
  propiedad: valor
  METODOS 
}

*/

const persona = {
  nombre: "Jhon",
  edad: 30,
  direccion: {
    calle: "Avenida Insurgente 187",
    cuidad: "CDMX",
  },
  saludar() {
    console.log(`Hola mi nombre es ${persona.nombre}`);
  },
};

console.log(persona);
persona.saludar();

// Adicionar propiedad
persona.telefono = "555-555-5555";

// Adicionar metodo
persona.despedir = () => {
  console.log(`Adios`);
};

persona.despedir();
console.log(persona);

delete persona.telefono;

console.log(persona);

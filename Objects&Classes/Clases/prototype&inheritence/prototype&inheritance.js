// El prototipo solo se crea o existe en funciones constructoras o clases

// function Persona(){}
// class Persona(){}

class Animal {
  constructor(nombre, tipo) {
    this.nombre = nombre;
    this.tipo = tipo;
  }
  emitirSonido() {
    console.log("El animal emite algun sonido ");
  }
}

// Para extender algunas de las funciones que puede realizar la clase animal

class Perro extends Animal {
  constructor(nombre, tipo, raza) {
    super(nombre, tipo);
    this.raza = raza;
  }
  emitirSonido() {
    console.log("El perro ladra");
  }
  correr() {
    console.log(`${this.nombre} corre alegremente`);
  }
}

const perro1 = new Perro("Bobby", "Perro", "Pug");

console.log(perro1);
perro1.correr();
perro1.emitirSonido();

// Se crea una instacia
perro1.nuevoMetodo = function () {
  console.log("Este es un nuevo metodo");
};

// Se crea un metodo a la clase Perro
Perro.prototype.segundoMetodo = function () {
  console.log("Este es un segundo metodo");
};

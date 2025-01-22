//Capacidades que tienen las funciones al igual que otros metodos

// 1. Pasar funciones como argumentos -> CallBack
function a() {}
function b(a) {}
b(a);

// 2. Retornar funciones
function a() {
  function b() {}
  return b;
}

// 3. Asignar funciones a variables
const a = function () {};

// 4. Tener propiedades y metodos
function a() {}
const obj = {};
a.call(obj);

// 5. Anidar funciones -> Nested functions
function a() {
  function b() {
    function c() {}
    c();
  }
  b();
}
a();

// 6. Es posible almacenar funciones en objetos -> Metodos
const rocket = {
  name: "Falcon 9",
  launchMessage: function launchMessage() {
    console.log("🔥");
  },
};

rocket.launchMessage();

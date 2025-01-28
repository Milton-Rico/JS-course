const usersDatabase = [
  {
    username: "andres",
    password: "123",
  },
  {
    username: "caro",
    password: "456",
  },
  {
    username: "mariana",
    password: "789",
  },
];

const usersTimeline = [
  {
    username: "Estefany",
    timeline: "Me encata Javascript!",
  },
  {
    username: "Oscar",
    timeline: "Bebeloper es lo mejor!",
  },
  {
    username: "Mariana",
    timeline: "A mi me gusta más el café que el té",
  },
  {
    username: "Andres",
    timeline: "Yo hoy no quiero trabajar",
  },
];
/* 
Requerimientos del reto:

1. El usuario debe poder ingresar su usuario y contraseña
2. El sistema debe ser capaz de validar si el usuario y contraseña ingresados por el usuario existen en la base de datos
3. Si el usuario y contraseña son correctos, el sistema debe mostrar un mensaje de bienvenida y mostrar el timeline del usuario.
4. Si el usuario y contraseña son incorrectos, el sistema debe mostrar un mensaje de error y no mostrar ningun timeline.

*/
const usernameUser = prompt("Digite su usuario:");
const passwordUser = prompt("Digite su contraseña:");

let validator = false;

usersDatabase.forEach((item) => {
  if (item.username === usernameUser && item.password === passwordUser) {
    validator = true;
  }
});

if (validator === true) {
  console.log("Bienvenido!");
  usersTimeline.forEach((usertimeline) => {
    if (usertimeline.username.toLowerCase() === usernameUser) {
      console.log(usertimeline.timeline);
    }
  });
} else {
  console.log("Error");
}

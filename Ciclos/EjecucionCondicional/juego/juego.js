const numeroSecreto = Math.floor(Math.random() * 10 + 1);

const numeroJugador = parseInt(
  prompt("Adivina el numero secreto entre el 1 y el 10")
);

console.log(`Este es el numero con el que juegas ${numeroJugador}`);

if (numeroJugador === numeroSecreto) {
  console.log("Felicidades, adivinaste el numero secreto!");
} else if (numeroJugador < numeroSecreto) {
  console.log("El numero es demasiado bajo, intenta de nuevo");
} else {
  console.log("El numero es muy alto, intenta de nuevo");
}

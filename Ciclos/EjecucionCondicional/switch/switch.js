// switch ("expresion") { //condicion ===
//   case valor1:
//     // executable code
//     break;
//   case valor2:
//     // executable code
//     break;
//   case valor3:
//     // executable code
//     break;
//   case valor4:
//     // executable code
//     break;
//   default:
//   //codigo
// }

let expr = "papayas";

switch (expr) {
  case "Naranjas":
    console.log("Las naranjas valen $20/kg");
    break;
  case "Manzanas":
    console.log("Las manzanas valen $43/kg");
    break;
  case "Platanos":
    console.log("Las platanos valen $30/kg");
    break;
  case "Mangos":
  case "Papayas":
    console.log("Los mangos y las papayas valen $25/kg");
    break;
  default:
    console.log(`Lo siento, no contamos con ${expr}`);
}

console.log("Hay algo mas que desees?");

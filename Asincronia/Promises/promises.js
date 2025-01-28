// /*
// Pasar de que nuestro modelo pase de ser sincorono a ser asincrono
// */

// Promise();
// // Tienen 3 estados
// pending;
// fullfilled;
// rejected;

// // callbacks
// resolved;
// rejected;

// // Metodos despues de que se resuleve

// then();
// catch()

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let operationSuccesfull = true;
    if (operationSuccesfull) {
      resolve("La operacion fue exitosa!");
    } else {
      reject("Fallo la operacion");
    }
  }, 2000);
});

promise.then((succesMessage) => {
  console.log(succesMessage);
});

promise.catch((errorMessage) => {
  console.log(errorMessage);
});

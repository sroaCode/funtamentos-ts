//Tipado por inferencia, al no declarar el tipo de variable el moto de typescript tipea las variables por inferencia de acuerdo a su valor

let myProductName = "Computador";
let myProductPrice = 2000000;

myProductName = "Computador Gamer";

//Funciones que se pueden usar de acuerdo al tipado de la variable
myProductName.toLowerCase();
myProductPrice.toFixed();

//Las constante no pueden cambiar su valor, typescript nos notifica esto, js no
const myProductStock = 1000;



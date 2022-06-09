(()=> {
    // Creamos la variable por inferencia
    let productPrice = 100
    productPrice = 12;
    console.log('productPrice ', productPrice);

    let customerAge = 18;
    //customerAge = customerAge + '1'; typescript notifica este tipo de errores, ya que no se puede sumar numeros y letras
    customerAge = customerAge + 1;
    console.log('customerAge', customerAge);

    let productInStock : number;
    //console.log(`Imprimimos el valor de la variable productInStock = ${productInStock}`); //Variable 'productInStock' is used before being assigned.
    //if(productInStock > 10)  ////Variable 'productInStock' is used before being assigned.
    {
        console.log("is good !!");
    }

    let discount = parseInt('sdasd');
    console.log(discount);

    if (isNaN(discount)){
        console.log(`el valor ${discount} entro en el if`);
    }

    //Trabajar con number
    let numero1 : number = 12 //correcto
    let numero2 : Number = 12 //Incorrecto

    //Ojo -> number Se debe usar con "n" minuscula siempre a pesar de que con mayuscula tambien funciona
}
)();
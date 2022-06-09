(() => {

    //Palabra reservada de typescript para crear alias: type
    //Ojo utilizar el '=' en vez de los ':'

    type userId = string | number; // variables con tipos de datos permitidos
    let userId: userId;

    //Literal types
    //imaginemos que vendemos camisas y las camisas tiene tamanos
    //Aqui nos va a capturar los valores Permitidos para esta vairable
    //Super cool!!!!

    let shirtSize: 'S' | 'M' | 'L' | 'XL'; //Variables con valores permitidos

    //Podemos combinar ambas cosas
    type SizeofShirt = 'S' | 'M' | 'L' | 'XL'; //tipod de datos con valores permitidos

    function greeting(userId: userId, SizeofShirt: SizeofShirt) {
        if (typeof userId === 'string') {
            console.log(`esto es un string = ${userId.toLowerCase}`);
        } else {
            console.log(`esto es un number = ${userId.toFixed}`);
        }
    }

    //greeting(2313, 'a'); //Marca error porque 'a' no es un valor permitido
    //greeting(2313, 's'); //Debe coincidir exactamente con los valore permitidos


})();
(()=>{
    //Tipado implicito
    let isEnable = true;
    console.log(`el valor de isEnable es = ${isEnable}`);
    isEnable = false;
    console.log(`el valor de isEnable es = ${isEnable}`);

    //Tipado explicito
    let isEnable2 : boolean;

    const randomNumber = Math.random();
    console.log(`numero randomico = ${randomNumber}`)

    //if ternario con asignacion
    isEnable2 = randomNumber > 0.5 ? true : false;

    console.log(`el valor de isEnable2 es = ${isEnable2}`);

    //recomendaciones

    let isTrue1 : boolean = true //correcto
    let isTrue2 : Boolean = true //incorrecto

    //ojo, en typescript boolean no es lo mismo que Boolean, se debe escribir en minuscula

})();
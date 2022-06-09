(()=>{

    //declaro la variable de tipo any
    let dynamicaVar : any = 'hola';

    //casteo forma 1
    const cast1 = (dynamicaVar as string).toLowerCase();
    console.log(`Valor de dynamicaVar luego de cast1 = ${cast1}`);

    //casteo forma 2
    const cast2 = (<number>dynamicaVar).toFixed;
    console.log(`Valor de dynamicaVar luego de cast2 = ${cast2}`);


})();
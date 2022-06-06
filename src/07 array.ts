//funcion anonima que ejecuta todo
(()=>{

    let prices1 = [1,2,435,213,654,231,5453,453,5,23,43];
    prices1.push(2);

    let prices2 = ['',true];
    prices2.push(false);

    //declaracion de forma explicita de arreglos de varios tipos
    let price3 : (number | string)[] = [12,'sd'];
    price3.push(23);
    price3.push('23');

    //Metodos de arrays
    prices1.map(item => item * 2); //Multiplica cada valor por 2
    
})();
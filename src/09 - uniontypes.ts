(()=>{

    let userId : string | number;
    userId = 1;
    userId = 'sebas1415';

    function greeting (myText : string | number){
        if (typeof myText === 'string'){
            console.log(`esto es un string = ${myText.toLowerCase}`);
        }else{
            console.log(`esto es un number = ${myText.toFixed}`);
        }

    }

    greeting('hola');
    greeting(213);

})();
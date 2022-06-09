// funciona que suma el total de un arreglo
(() => {

    // Retorno implicito : esta atado al valor que rertorne, el sistema lo infiere
    const calcTotalImplicit = (prices: number[]) => {
        //forma elegante : prices.reduce;
        let total = 0;
        prices.forEach((item) => {
            total += item;
        });
        return total
    }

    //asignacion implicita (ya la habiamos visto);
    const rtaImplicit = calcTotalImplicit([1, 2, 3, 4, 5]);
    console.log(`resultado de la suma de calcTotalImplicit = ${rtaImplicit}`);

    // Retorno explicito : const calcTotalExplicit = ():number le defino que tipo de dato retorna
    const calcTotalExplicit = (prices: number[]): number => {
        //forma elegante : prices.reduce;
        let total = 0;
        prices.forEach((item) => {
            total += item;
        });
        return total
    }

    //asignacion expllicita (ya la habiamos visto antes)
    const rtaExplicit: number = calcTotalExplicit([1, 2, 3, 4, 5]);
    console.log(`resultado de la suma de calcTotalExplicit = ${rtaExplicit}`);

    //Funciones que no retornan nada "void"
    const voidReturn = (): void =>{
        //return 'Hola'; //Genera error porque le estoy indicando que el retorno es de tipo void
    }
})();
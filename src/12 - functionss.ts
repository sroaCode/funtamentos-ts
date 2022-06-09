(() => {

    type Sizes = 'M' | 'X' | 'S' | 'XL'

    //creacion de funciones tradicionalmente
    function createProductsToJson(title: string, createDate: Date, stock: number, size: Sizes) {
        return {
            title: title,
            createDate: createDate,
            stock: stock,
            size: size
        }
    }

    //llamando la funcion
    const product1 = createProductsToJson('Jabon', new Date(), 12, 'XL');
    console.log(`Objeto product1: `);
    console.log(product1);
    console.log(`create date de product1 = ${product1.createDate}`);
    console.log(`product size de product1.size = ${product1.size}\n`);

    // se recomienda trabajar con arrow function
    const createProductsToJsonV2 = (title: string, createDate: Date, stock: number, size?: Sizes | undefined) => { //"size?" define un parametro que no es obligatorio y "| undefined" permite recibir como parametro un valor undefined
        return {
            title: title,
            createDate: createDate,
            stock: stock,
            size: size
        }
    }

    const product2 = createProductsToJsonV2('Jabon', new Date(), 12);
    console.log(`Objeto product2: `);
    console.log(product2);
    console.log(`create date de product2 = ${product2.createDate}`);
    console.log(`product size de product2.size = ${product2.size}`);

})();
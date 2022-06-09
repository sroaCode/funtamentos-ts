(() => {

    type size = 'S' | 'M' | 'L' | 'XL';
    type product = {
        title: string,
        createDate: Date,
        stock: number,
        size?: size
    }
    
    let products: product[] = [];
    
    const addProduct = (data:product) => {
        products.push(data);
    }

    //Productos que quiero agregar
    let producto1:product = {
        title: 'title',
        createDate: new Date(),
        stock: 100,
        size: 'XL',
    }

    let producto2:product = {
        title: 'title',
        createDate: new Date(),
        stock: 100,
    }

    addProduct(producto1); //No se porque cuando agrego el objeto como variable marca error

    addProduct(producto2);

    addProduct({
        title: 'title',
        createDate: new Date(),
        stock: 100,
        size: 'XL',
    });

    console.log(products[0]);
    console.log(products[1]);
    console.log(products[2]);
})();
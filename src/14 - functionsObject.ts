(() => {

    //Problema normal, se desea recibir un objeto en vez de recibir dato por dato
    const login = (user: string, pw: string) => {
        console.log(user, pw);
    }

    login('user', 'pw');

    //Solucion 1:
    const loginObject = (data: { user: string, pw: string }) => {
        console.log(data.user, data.pw);
    }

    let products: any[] = [];
    type size = 'S' | 'M' | 'L' | 'XL';
    const addProduct = (data:
        {
            title: string,
            createDate: Date,
            stock: number,
            size?: size
        }) => {
        products.push(data);
    }

    //Productos que quiero agregar
    let producto1 = {
        title: 'title',
        createDate: new Date(),
        stock: 100,
        size: 'XL',
    }

    let producto2 = {
        title: 'title',
        createDate: new Date(),
        stock: 100,
    }

    addProduct(producto1); //se soluciona tipando los objetos (ejemplo 15 - objects.ts)

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
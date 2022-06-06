(()=>{

    //asignacion por inferencia
    let productTitle = 'my amazing title';
    console.log(`el valor de productTitle es = ${productTitle}`);

    productTitle = 'this is my new title';
    console.log(`el valor de productTitle es = ${productTitle}`);

    //asignacion por forma explicita
    let mytitle : string = 'this is my title';
    console.log(`el valor de mytitle es = ${mytitle}`);

    let myPrice = 100;
    let inStock = true;
    

    const summary = `
        title: ${mytitle}
        price: ${myPrice}
        Stock: ${inStock}
    `

    console.log(summary);


})();
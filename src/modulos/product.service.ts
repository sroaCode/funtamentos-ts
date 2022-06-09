// En los archivos .service operamos con la data

import { product } from './product.model';

export let products: product[] = [];
    
export const addProduct = (data:product,message?:string) => {
    products.push(data);
    console.log(message)
}

export const calcStock = ():number => {
    let total = 0;
    products.forEach((item)=>{
        total = item.stock;
    });
    return total;
}
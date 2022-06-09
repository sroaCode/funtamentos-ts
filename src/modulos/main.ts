//En este archivo hacemos la ejecucion 

import { product } from './product.model';
import { addProduct, calcStock, products } from './product.service';

//Productos que quiero agregar
let producto1: product = {
    title: 'title',
    createDate: new Date(),
    stock: 100,
    size: 'XL',
}

let producto2: product = {
    title: 'title',
    createDate: new Date(),
    stock: 100,
}

addProduct(producto1,'hola wey'); //No se porque cuando agrego el objeto como variable marca error

addProduct(producto2);

console.log(`productos en lista`);
console.log(products);

let arreglo : (number | boolean) [];

const rta = 1 + '1'
console.log(typeof(rta));

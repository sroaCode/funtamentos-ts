//En los archivos .models definimos el typado de nuestros datos

export type size = 'S' | 'M' | 'L' | 'XL';
export type product = {
    title: string,
    createDate: Date,
    stock: number,
    size?: size
}
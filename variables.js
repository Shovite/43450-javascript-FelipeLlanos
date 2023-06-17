class Producto {
    constructor(id, nombre, precio, stock) {
        this.id = id
        this.nombre = nombre
        this.precio = precio
        this.stock = stock
    }
}
const carrito = []
const productos =  [{id: 1, nombre: 'becker', precio: 2500, stock: 2},
                    {id: 2, nombre: 'escudo', precio: 3500, stock: 1},
                    {id: 3, nombre: 'cristal', precio: 2000, stock: 2}]

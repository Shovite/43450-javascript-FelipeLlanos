function nextId(){
    let newid = productos.length + 1
return newid
}

function crearProducto(){
    const id = nextId()
    const nombre = prompt("Ingrese nombre producto")
    const precio = prompt("Ingrese precio") // hay que hacerlo numero
    const stock = prompt("Ingrese Stock") // hay que hacerlo numero
    const nuevoProducto = new Producto(id, nombre, precio, stock)
    productos.push(nuevoProducto)
} 

function venderProducto(){
    let nombreProducto = prompt("¿que productos quieres vender?")
    const venta = productos.find((producto)=> producto.nombre == nombreProducto)
    if(venta === undefined){
        console.warn("Producto no encontrado")
    } else {
        if(venta.stock <= 0){
            console.warn("No queda stock de " + venta.nombre)
        } else {
            venta.stock = venta.stock - 1
            console.log("te quedan " + venta.stock + " " + venta.nombre)
        }
        
    }
}

function menorPrecio(){
    const productosOrdenados = productos
    productosOrdenados.sort((a,b) => {
        if(a.precio > b.precio){
            return 1
        }
        if(a.precio < b.precio){
            return -1
        }
        return 0
    })
    console.log(productosOrdenados)
}


console.log(venderProducto())
console.log(productos)

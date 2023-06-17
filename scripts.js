function nextId(){
    let newid = productos.length + 1
return newid
}
function crearProducto(){
    const id = nextId()
    const nombre = prompt("Ingrese nombre producto").toLowerCase()
    const precio = parseInt(prompt("Ingrese precio"))
    const stock = parseInt(prompt("Ingrese Stock"))
    const nuevoProducto = new Producto(id, nombre, precio, stock)
    productos.push(nuevoProducto)
    alert(nombre + " agregado/a")
} 
function venderProducto(){
    let nombreProducto = prompt("¿que productos quieres vender?").toLowerCase()
    const venta = productos.find((producto)=> producto.nombre == nombreProducto)
    if(venta === undefined){
        alert("Producto no encontrado")
    } else {
        if(venta.stock <= 0){
            alert("No queda stock de " + venta.nombre)
        } else {
            venta.stock = venta.stock - 1
            alert("¡VENDIDO!")
            alert("te queda(n) " + venta.stock + " " + venta.nombre + " disponible(s)")
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
    alert("Estos son los productos actuales de menor a mayor precio:")
    for(let i = 0; i < productosOrdenados.length; i++){
        
        alert(productosOrdenados[i].nombre + " || $" + productosOrdenados[i].precio + " || " + productosOrdenados[i].stock + " unidades")
    }
}
function start(){
    let nombreVendedor = prompt("Favor ingresa tu nombre de vendedor")
    let validadorNumerico = isNaN((nombreVendedor))
    while (nombreVendedor == null || validadorNumerico == false){
        nombreVendedor = prompt("Nombre no valido, favor ingresar nuevamente")
        validadorNumerico = isNaN((nombreVendedor))
    }
    alert("¡Hola " + nombreVendedor + "!")
    let accion
    while(accion != "salir"){
        accion = prompt("Indica que accion necesitas realizar: 'VENDER', 'CREAR PRODUCTO', 'CONSULTAR' o 'SALIR'").toLowerCase()
        switch(accion){
            case "crear producto":
                crearProducto()
                break;
            case "vender":
                venderProducto()
                break;
            case "consultar":
                menorPrecio()
                break;
            case "salir":
                alert("¡Adios " + nombreVendedor + "!")
                break;
            default:
                alert("¡OPCION NO VALIDA!")
                break;
        }   
    }
}
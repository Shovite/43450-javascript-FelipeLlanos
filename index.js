
const container = document.querySelector('div.container#container')
const inputSearch = document.querySelector("input#inputSearch")
const precioTotal = document.querySelector('div.totalCost')

function retornoCardHTML(producto) {

    if(producto.stock != 0){
        return `<div class="div-card">
                    <div class="nombre"><h1>${producto.nombre}</h1></div>
                    <img src="./imagenes/sinimagen.jpg" alt="muestra">
                    <div class="precio"><p>$ ${producto.precio}</p></div>
                    <div class="vender"><button id="${producto.id}"class="vender">VENDER</button></div>
                    <div class="comprar"><button id="${producto.id}"class="comprar">COMPRAR</button></div>
                </div>`
    }else{
        return `<div class="div-card">
                    <div class="nombre"><h1>${producto.nombre}</h1></div>
                    <img src="./imagenes/sinimagen.jpg" alt="muestra">
                    <div class="precio-tachado"><p>$ ${producto.precio} </p></div>
                    <div class="sin-stock"><id="${producto.id}"class="sin-stock"> <del>SIN STOCK</del> </div>
                </div>`
    }
}

function cargarProductos() {
    if(recuperarStockDeLocalStorage().length > 0){
        productos = recuperarStockDeLocalStorage()
    }
    container.innerHTML = ''
    productos.forEach((producto) => {
        container.innerHTML += retornoCardHTML(producto)
    });
    activarClickEnBotones()
}

function activarClickEnBotones(){
    const botones = document.querySelectorAll('button.vender')
    for(let boton of botones){
        boton.addEventListener('click', (e)=> {
            const copeteElegido = productos.find((copete)=> copete.id === parseInt(e.target.id))
            const idCopete = copeteElegido.id
            AgregarProductoEnCuenta(copeteElegido)
        })
    }
}

function AgregarProductoEnCuenta(copeteElegido){
    if(copeteElegido.stock > 0){
        cuenta.push(copeteElegido)
        guardarCuentaEnLocalStorage()
        copeteElegido.stock -= 1
        guardarStockEnLocalStorage()
        actualizarTotalCuenta()
    }else{
        cargarProductos(copeteElegido)
    }
}

function totalCuenta(){
    for(let i=0 ; i<cuenta.length ; i++){
        total += cuenta[i].precio
    }
    return total 
}

function actualizarTotalCuenta(copeteElegido){
        total = 0
        precioTotal.innerHTML = "$" + totalCuenta().toLocaleString('es-CL');
        guardarTotalEnLocalStorage()
}

cargarProductos()
actualizarTotalCuenta()


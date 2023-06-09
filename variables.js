class Producto {
    constructor(id, nombre, precio, stock) {
        this.id = id
        this.nombre = nombre
        this.precio = precio
        this.stock = stock
    }
}
const cuenta = []
let productos =  [{id: 1, nombre: 'becker', precio: 2500, stock: 2},
                    {id: 2, nombre: 'escudo', precio: 3500, stock: 1},
                    {id: 3, nombre: 'cristal', precio: 2000, stock: 2}]


const guardarTotalEnLocalStorage = ()=> {
    if (cuenta.length > 0){  
        localStorage.setItem('total', totalCuenta())
    }
}

const guardarStockEnLocalStorage = ()=> {
    if (productos.length > 0){  
        localStorage.setItem('productos', JSON.stringify(productos))
    }
}

const guardarCuentaEnLocalStorage = ()=> { 
    if (cuenta.length > 0){  
        localStorage.setItem('cuenta', JSON.stringify(cuenta))
    }
}

const recuperarCuentaDeLocalStorage = ()=> {
    if(localStorage.getItem('cuenta'))
        return JSON.parse(localStorage.getItem('cuenta')) 
    else{
        return[]
    }
}

const recuperarStockDeLocalStorage = ()=> {
    if(localStorage.getItem('productos'))
        return JSON.parse(localStorage.getItem('productos'))
    else{
        return[]
    }
}

const recuperarTotalDeLocalStorage = ()=> { 
    if(localStorage.getItem('total'))
        return localStorage.getItem('total')
    else{
        return[]
    }
}

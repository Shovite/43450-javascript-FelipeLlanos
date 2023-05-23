let username
let beerCost = 2500

function NameValidator(){  //Solicitamos un nombre. En caso de ser vacio se le asigna el nombre de "JUAN"
    username = prompt("ingresa tu nombre")
    if(username.trim() !== ""){
            alert("Gracias " + username)
        }
        else{
            alert("Como no ingresaste nombre, te diremos JUAN.... Hola JUAN")
            username = "JUAN"
        }
    }

function AgeValidator(){  //Validamos Edad, si es menor de 18 manda una alerta a la consola
    let age = prompt("ingresa tu edad")
    if(age >= 18){
        alert("Bienvenido " + username + ", recuerda que esta es una página solo para mayores de 18")
    }
    else{
        confirm("Lo sentimos "+username+" esta página es solo para mayores de 18, ¿seguro que quieres entrar?")
        console.warn("ALERTA: Es posible que un menor de edad este entrando al sitio")
        }    
}

function BuyBeer(){   // Vemos cuantas cervezas va a comprar, y se redondea hacia abajo si es decimal
        let buyAmount = prompt("¿Cuantas botellas vas a comprar? ($2.500 c/u)")
        console.log("---------------------")
        for(let i = 1 ; i <= Math.floor(buyAmount) ; i++){   //Se imprime la boleta para pagar por consola
            console.log(i + ". Beer Bottle " + "$2500")
        }
        console.log("Tu valor a pagar es de $" + Math.floor(buyAmount)*beerCost)
        console.log("---------------------")
        console.log("Gracias por visitarnos")
}

NameValidator()
AgeValidator()
BuyBeer()




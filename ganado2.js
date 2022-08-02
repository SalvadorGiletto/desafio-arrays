// BOVINO Y PORCINO
//Clase principal
class Ganado {
    constructor(tipo,cabezas,pesoPromedio){
        this.tipo = tipo
        this.cabezas = cabezas
        this.pesoPromedio = pesoPromedio
    }
}

//BOVINO
//Clases hijos
class Angus extends Ganado {
    constructor(tipo,cabezas,pesoPromedio){
        super(tipo, cabezas,pesoPromedio)
        this.raza = "Angus"
    }

}
class Holando extends Ganado {
    constructor(tipo,cabezas,pesoPromedio){
        super(tipo,cabezas,pesoPromedio)
        this.raza = "Holando"
    }
}
class Hereford extends Ganado {
    constructor(tipo,cabezas,pesoPromedio){
        super(tipo,cabezas,pesoPromedio)
        this.raza = "Hereford"
    }
}


//Creando objetos
const angus1 = new Angus ("Bovino", 125, 450)
const holando1 = new Holando ("Bovino",350, 435)
const hereford1 = new Hereford ("Bovino",198 ,480)


// PORCINO
//Clases hijos
class Blanca extends Ganado {
    constructor(tipo,cabezas,pesoPromedio){
        super(tipo, cabezas,pesoPromedio)
        this.raza = "Blanca"
    }
}
class Negra extends Ganado {
    constructor(tipo,cabezas,pesoPromedio){
        super(tipo,cabezas,pesoPromedio)
        this.raza = "Negra"
    }
}
class Iberico extends Ganado {
    constructor(tipo,cabezas,pesoPromedio){
        super(tipo,cabezas,pesoPromedio)
        this.raza = "Ibérico"
    }
}

//Creando objetos
const blanca1 = new Blanca ("Porcino", 560, 102)
const negra1 = new Negra ("Porcino",206 , 92)
const iberico1 = new Iberico ("Porcino",360 , 107)


//Creando arrays 
const rodeoVacas = [angus1, holando1, hereford1]
const rodeoCerdos = [blanca1, negra1, iberico1]


//CONSULTANDO ARRAYS
/*
console.table (rodeoVacas)
console.table (rodeoCerdos)
*/

//NUEVO OBJETO
const brangus1 = new Ganado ("Bovino", 210, 456)
const chanchi1 = new Ganado ("Porcino", 50, 106)

//PUSHEO EN LOS ARRAYS
rodeoVacas.push (brangus1)
rodeoCerdos.push (chanchi1)

/*
console.table (rodeoVacas) //Al crear nuevas clases para los objetos, no se como agregarle una nueva propiedad al que quiero pushear, sin tener que crearle si propia clase. Por eso al consultar, me queda la propiedad de raza vacía.
console.table (rodeoCerdos) //Al crear nuevas clases para los objetos, no se como agregarle una nueva propiedad al que quiero pushear, sin tener que crearle si propia clase. Por eso al consultar, me queda la propiedad de raza vacía.
*/

//EJEMPLO INTEGRADOR USANDO LOS DATOS DE ARRIBA
let elegirUno = prompt("Con qué ganado quieres trabajar (Bovino / Porcino)").toLowerCase()
let eleccion = ""

if(elegirUno == "porcino"){
    alert(`Has elegido trabajar con Porcinos`)
    eleccion1 = prompt("Quieres agregar una razas de ese ganado?")
    if(eleccion1 == "si"){
        dato1 = prompt("elige el tipo")
        dato2 = prompt("cuantas cabezas hay")
        dato3 = prompt("que peso promedio tienen")
        
    }

    nuevaRaza = new Ganado (dato1 , dato2 , dato3)
    
    alert("Nueva raza creada. Revisa la consola")
    console.log("Nueva raza creada")
    console.table (nuevaRaza)

    
    rodeoCerdos.push(nuevaRaza)
    console.log("Lista completa")
    console.table (rodeoCerdos)

}else if(elegirUno == "bovino"){
    alert(`Has elegido trabajar con Bovinos`)
    eleccion1 = prompt("Quieres agregar una razas de ese ganado?")
    if(eleccion1 == "si"){
        dato1 = prompt("elige el tipo")
        dato2 = parseInt(prompt("cuantas cabezas hay"))
        dato3 = parseFloat(prompt("que peso promedio tienen"))
        
    }

    nuevaRaza = new Ganado (dato1 , dato2 , dato3)
    alert("Nueva raza creada. Revisa la consola")
    console.log("Nueva raza creada")
    console.table (nuevaRaza)


    rodeoVacas.push(nuevaRaza)
    console.log("Lista completa")
    console.table (rodeoVacas)
} 


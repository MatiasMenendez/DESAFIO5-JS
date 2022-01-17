/*Simulador de presupuesto de plancha de metal*/

/* OBJETOS*/ 
class Material {
    constructor(nombre, precioPorKilo, disponibilidad, pesoEspecifico, medida1, medida2, espesor) {
        this.nombre = nombre;
        this.precioPorKilo = precioPorKilo;
        this.disponibilidad = disponibilidad;
        this.pesoEspecifico = pesoEspecifico;
        this.medida1 = medida1;
        this.medida2 = medida2;
        this.espesor = espesor;
    }
}

/*Variables*/
let tipoDeMaterial = prompt ('Material: hierro o inoxidable')
let medida1 = Number (prompt ('Indicar ancho del material (ejemplo 100 o 3000)')) /1000
let medida2 = Number (prompt ('Indicar ancho del material (ejemplo 100 o 1500)')) /1000
let espesor = Number (prompt ('Indicar espesor en numeros ( ejemplo 0.7 o 2)'))
var valorDolar = 108
var pesoEspecifico = 7.2

const hierro = new Material('hierro', 330, true, 7.2, medida1, medida2, espesor)
const inoxidable = new Material('inoxidable', 1300, true, 7.2, medida1, medida2, espesor)

/*Funcion encargada de hacer la cuenta del valor de la plancha de metal (con los valores dados a los objetos)*/
function calcularPresupuesto(){
    if (tipoDeMaterial === 'hierro'){
    let precioHierro = hierro.medida1 * hierro.medida2 * hierro.espesor * hierro.pesoEspecifico * hierro.precioPorKilo;
    alert(precioHierro + 'pesos')
    let precioDolarh = hierro.medida1 * hierro.medida2 * hierro.espesor * hierro.pesoEspecifico * hierro.precioPorKilo / valorDolar;
    alert(precioDolarh + 'dolares')}

    else if(tipoDeMaterial === 'inoxidable'){
    let precioInoxidable = inoxidable.medida1 * inoxidable.medida2 * inoxidable.espesor * inoxidable.pesoEspecifico * inoxidable.precioPorKilo;
    alert(precioInoxidable + 'pesos')
    let precioDolari = inoxidable.medida1 * inoxidable.medida2 * inoxidable.espesor * inoxidable.pesoEspecifico * inoxidable.precioPorKilo / valorDolar;
    alert(precioDolari + 'dolares')}

}
    
calcularPresupuesto();

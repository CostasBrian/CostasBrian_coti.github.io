//-----------------recibo los valores del HTML-----------------------------
const butonCotizar = document.getElementById('cotizar')

const selectColor = document.getElementById('color')
const selectCapacidad = document.getElementById('capacidad')
const inputCantidad = document.getElementById('cantidad')
const resultado = document.getElementById('result')
const imagen = document.getElementById('imagen')
    //-----------------defino variables de precios--------------------------

const primerOpcion = 150000
const segundaOpcion = 165000
const tercerOpcion = 180000
let price = 0
    //------------------valido la cantidad----------------------------------

function validarCantidad() {
    if (inputCantidad.value > 0 && inputCantidad.value <= 10) {
        return true
    } else {
        return false
    }
}
//-------------------calculo la cotizacion con validaciones------------------
function calculatePrice() {
    if (!validarCantidad()) {
        resultado.innerHTML = `Error: Cantidad no Valida`
        resultado.style.backgroundColor = "#ff0000"
        resultado.style.display = "block"
        return false
    }
    if (selectCapacidad.value == "0" || selectColor.value == "0") {
        resultado.innerHTML = `Error: Complete todos los campos`
        resultado.style.backgroundColor = "#ff0000"
        resultado.style.display = "block"
    } else {
        switch (selectCapacidad.value) {
            case "128":
                price = Number(primerOpcion) * inputCantidad.value
                break;
            case "256":
                price = Number(segundaOpcion) * inputCantidad.value
                break;
            case "512":
                price = Number(tercerOpcion) * inputCantidad.value
                break;
            default:
                break;
        }
        resultado.innerHTML = `Cotizacion: $${price}`
        resultado.style.backgroundColor = "#008000"
        resultado.style.display = "block"
    }
}
//--------------------cambio imagen del iphone---------------------------
function changeProductImage() {
    imagen.src = `./img/iphone_13_${selectColor.value}.png`
}
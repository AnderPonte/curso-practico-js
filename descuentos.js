const precioOriginal =120;
const descuento = 18;

function calcularPrecioConDescuento(precio,descuento) {
    const porcentajeConDescuento = 100 - descuento;
    const precioFinal = (precio * porcentajeConDescuento) / 100 ;
    return precioFinal;
}


// console.log({
//     precioOriginal,
//     descuento,
//     porcentajeConDescuento,
//     precioFinal
// })

function OnClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("InputDiscount");
    const discount = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue,discount);

    const resulP = document.getElementById("ResulP");
    resulP.innerText = "El precio con descuento es $" + precioConDescuento;



}
// const precioOriginal =120;
// const descuento = 18;




// console.log({
//     precioOriginal,
//     descuento,
//     porcentajeConDescuento,
//     precioFinal
// })

//Calcular el precio final con descuento

function calcularPrecioConDescuento(precio,descuento) {
    const porcentajeConDescuento = 100 - descuento;
    const precioFinalDescuento = (precio * porcentajeConDescuento) / 100 ;
    return precioFinalDescuento;
}

// funcion OnClickButtonPriceDiscount

function OnClickButtonPriceDiscount() {

// user inserta precio y coupon
const inputPrice = document.getElementById("InputPrice");
const valuePrice= inputPrice.value;

const inputCoupon = document.getElementById("InputCoupon");
const couponValue= inputCoupon.value;



const coupons = [
    {
        name: "15forever",
        discount: 15,
    },
    {
        name: "30forever",
        discount: 30,
    },
    {
        name: "25forever",
        discount: 25,
    },
];

//comprobar si el cupon ingresado por el usuario se encuentra en nuestro array
const userCoupon = coupons.find(function(coupon){
        return coupon.name === couponValue;
});

if(!userCoupon){
    alert("El cupón " + couponValue + "no es válido")
} else {
    const descuento = userCoupon.discount;
    const precioConDescuento = calcularPrecioConDescuento(valuePrice,descuento);

    const resulp = document.getElementById("ResulP");
    resulp.innerText = "El precio con descuento es $" + precioConDescuento;

}

}
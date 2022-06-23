//Código del cuadrado
console.group("Cuadrados");

// const ladocuadrado = 5;
// console.log("los lados del cuadrado miden: " + ladocuadrado + " cm");

function perimetrocuadrado (lado) {
    return lado * 4;
}

//console.log("El perimetro del lado cuadrado es: " + perimetrocuadrado + " cm") ;

function areacuadrado (lado) {
    return lado * lado;
}
//console.log("El área del lado cuadrado es: " + areacuadrado + " cm2");

console.groupEnd();

//Código del Triangulo
// console.group("Triangulo");

// const ladotri1 = 6;
// const ladotri2 = 6;
// const basetr = 4;

// console.log("Los lados del triangulo miden: " +ladotri1 + " cm, " + ladotri2 + " cm y la base de " + basetr + " cm");

// const altura = 5.5;
// console.log("La altura del triangulo es de: " + altura + " cm");

function perimetrotriangulo (lado1,lado2,base) {
    return lado1 + lado2 + base;
} 

//console.log("El perimetro del triangulo es de : " + perimetrotriangulo + " cms");

function areatr (altura,base) {
    return (altura * base) / 2;
}

//console.log("El área del triangulo es de : " + areatr + " cm2");

console.groupEnd();

//Código en círculo

console.group("Círculos");

//Radio
// const radioC = 4;
// console.log("El radio del circulo es: " + radioC + " cm");

//Diametro
function diametrocir (radio) {
       return radio * 2;
}

//console.log("El diametro del circulo es: " + diametro + " cm");

//PI
const pi = Math.PI;
console.log("El pi es: " + pi);


//Circunferencia
function perimetrocirculo (radio) { 
    const diametro = diametrocir(radio);
    return diametro * pi;
}

//console.log("El perimetro del circulo es: " + perimetrocirculo + " cm");

//Área
function areacirculo (radio) {
    return (radio * radio) * pi;
}

//console.log("El área del circulo es: " + areacirculo + " cm2");


console.groupEnd();

//Aquí interactuamos con el html

function calcularperimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetrocuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areacuadrado(value);
    alert(area);

}
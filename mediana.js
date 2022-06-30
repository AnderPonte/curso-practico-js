function calcularmedia(lista) {
    let sumalista = 0;
    for (let i = 0; i < lista.length; i++) {
        sumalista = sumalista + lista[i];
    }

    const promediolista = sumalista / lista.length;
    return promediolista;
}

const lista1 = [
    100,
    200,
    300,
    400,
   ]

const mitadlista1 = parseInt(lista1.length / 2);

function esPar(numero) {
    if (numero % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

let mediana;

if (esPar(lista1.length)) {
    const elemento1 = lista1[mitadlista1 -1];
    const elemento2 = lista1[mitadlista1];
    const promedio1y2 = calcularmedia([
        elemento1, 
        elemento2]);
    
    mediana = promedio1y2;

} else {
    mediana = lista1[mitadlista1];
    
}
//calcular el promedio

//con ciclo for

const lista = [100, 200, 300];

function calcularmedia(lista) {
    let sumalista = 0;
    for (let i = 0; i < lista.length; i++) {
        sumalista = sumalista + lista[i];
    }

    const promediolista = sumalista / lista.length;
    return promediolista;
}

console.log("el promedio es: " + calcularmedia(lista));


//

// function calcularmedia(lista){
//     const sumaLista = lista.reduce(
//         function(valorAcum = 0, nuevoElemento){
//             return valorAcum + nuevoElemento;
//         }
//     )

//     const promediolista = sumaLista / lista.length;
//     return promediolista;

// }
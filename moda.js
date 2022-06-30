const lista1 = [
    1, 2, 3, 1, 2, 3, 4, 2, 2, 1, 2
]

const lista1Count = {};

    lista1.map(
        function(el) {
            if(lista1Count[el]) {
                lista1Count[el] += 1;
            } else {
                lista1Count[el] = 1;
            }
            
        }
    );

const lista1array = Object.entries(lista1).sort(
    function (valorAcc, nuevoValor) {
        
    }
);
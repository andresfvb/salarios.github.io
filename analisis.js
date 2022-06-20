//Funciones Helpers
function esPar(numero){
    return (numero % 2 === 0);
}


function calcularPromedio(lista){
    const sumaLista = lista.reduce(
        function (valorAcumulad = 0, nuevoElemento){
            return valorAcumulad + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
};
//Calculadora de mediana

function medianaSalarios(lista){
    const mitad = parseInt(lista.length / 2);
    
    if (esPar(lista.length)){
        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad];
        const mediana = calcularPromedio([personaMitad1, personaMitad2]);
        return mediana;
    }else{
        const personaMitad = lista[mitad];
        return personaMitad
    }
}

//Calculando la mediana general

const salarioCol = colombia.map(
    function (persona){
        return persona.salary;
    }
);
const salarioColSorted = salarioCol.sort(
    function (salaryA, salaryB){
        return salaryA - salaryB;
    }
);
const medianaGeneralCol = medianaSalarios(salarioColSorted);


//Mediana del top10%
const spliceStart = (salarioColSorted.length * 90) / 100;
const spliceCount = salarioColSorted.length - spliceStart;
const salariosTop10Col = salarioColSorted.splice(
    spliceStart,
    spliceCount,
);
const medianaTop10Col = medianaSalarios(salariosTop10Col);

console.log(
    medianaGeneralCol,
    medianaTop10Col,
);

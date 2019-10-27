/**
 * A partir del siguiente array que se proporciona: var valores = [true, 5, false, "hola",
 * "adios", 2];
 * 1. Determinar cual de los dos elementos de texto es mayor
 * 2. Utilizando exclusivamente los dos valores booleanos del array, determinar los operadores
 * necesarios para obtener un resultado true y otro resultado false
 * 3. Determinar el resultado de las cinco operaciones matemáticas realizadas con los dos
 * elementos numéricos
 * 
 * @author Manuel Ariza Serrano
 */
{

    let inicio = function () {
        let valores = [true, 5, false, "hola", "adios", 2];

        let valor1 = valores[0];
        let valor2 = valores[2];

        //texto mayor
        let mayor = valor1 < valor2;
        alert(mayor);
        //valor TRUE
        let verdadero = valores[0] || valores[2];
        alert(verdadero);
        //valor FALSE
        let falso = valores[1] && valores[2];
        alert(falso);
    }

    document.addEventListener("DOMContentLoaded", inicio);
}



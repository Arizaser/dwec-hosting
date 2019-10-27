/**
 * Definir una función que muestre información sobre una cadena de texto que se le pasa como
 * argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada
 * sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.
 * 
 * @author Manuel Ariza Serrano
 */
{

    let inicio = function () {
        let cadena = prompt("Introduce una cadena");
        infoCadena(cadena);
    }

    document.addEventListener("DOMContentLoaded", inicio);


    let infoCadena = function (cadena) {
        if (cadena === cadena.toUpperCase()) {
            console.log("La cadena es mayusculas");
        } else if (cadena === cadena.toLowerCase()) {
            console.log("La cadena es minusculas");
        } else {
            console.log("La cadena tiene mezcla de mayusculas y minusculas.");
        }
    }



}
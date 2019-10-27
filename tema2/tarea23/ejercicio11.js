/**
 * A partir de la página web proporcionada y utilizando las funciones DOM, mostrar por pantalla la siguiente información:
 * 
 * Número de enlaces de la página
 * Dirección a la que enlaza el penúltimo enlace
 * Numero de enlaces que enlazan a http://prueba
 * Número de enlaces del tercer párrafo
 * 
 * @author Manuel Ariza Serrano
 * 
 */
{

    let inicio = function () {
        let resultado = document.getElementById("resultado");
        // Numero de enlaces de la pagina
        let enlaces = document.getElementsByTagName("a");
        totalEnlaces = enlaces.length;

        // Direccion del penultimo enlace
        let direccion = enlaces[enlaces.length - 2].href;

        // Numero de enlaces que apuntan a http://prueba
        let contador = 0;
        for (let i = 0; i < enlaces.length; i++) {
            if (enlaces[i].href == "http://prueba" || enlaces[i].href == "http://prueba/") {
                contador++;
            }
        }

        // Numero de enlaces del tercer p�rrafo
        let parrafos = document.getElementsByTagName("p");
        let nEnlaces = parrafos[2].getElementsByTagName("a");

        resultado.innerHTML = "Hay " + totalEnlaces + " enlaces en total.<br>" +
            "La direccion del penultimo enlace es " + direccion + ".<br>" +
            "El numero de enlaces que apunta a http://prueba son " + contador + ".<br>" +
            "Hay " + nEnlaces.length + " enlaces en el tercer parrafo.";
    }

    document.addEventListener("DOMContentLoaded", inicio);
}

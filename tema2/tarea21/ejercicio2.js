/**
 * Modificar el primer script del capítulo anterior para que:
 * 1. El mensaje que se muestra al usuario se almacene en una variable llamada mensaje y el
 * funcionamiento del script sea el mismo.
 * 2. El mensaje mostrado sea el de la siguiente imagen:
 * 
 * @author Manuel Ariza Serrano
 */
{

    let inicio = function () {
        let mensaje = alert("¡Hola Mundo!\nQue facil es incluir \'comillas simples\' y \"comillas dobles\"");
        alert(mensaje);
    }

    document.addEventListener("DOMContentLoaded", inicio);
}
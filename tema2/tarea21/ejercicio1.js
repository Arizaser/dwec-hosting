/**
 * Aparece el primer mensaje que es el de Hola mundo y
 * después aparece el de soy el primer script.
 * 
 * @author Manuel Ariza Serrano
 */
{

    let inicio = function () {
        alert("¡Hola Mundo!");
        alert("Soy el primer script");
    }

    document.addEventListener("DOMContentLoaded", inicio);
}
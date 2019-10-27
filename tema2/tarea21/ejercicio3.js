/**
 * Crear un array llamado meses y que almacene el nombre de los doce meses del año. Mostrar por
 * pantalla los doce nombres utilizando la función alert().
 * 
 * @author Manuel Ariza Serrano
 */

{

    let inicio = function () {
        var a = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

        for (let index = 0; index < a.length; index++) {
            alert(a[index]);

        }
    }

    document.addEventListener("DOMContentLoaded", inicio);
}

/**
 * Ejercicio 16
 * 
 * Crear un script que informe al usuario en que zona de la pantalla ha pulsado 
 * el ratón. Las zonas definidas son las siguientes: izquierda arriba, izquierda 
 * abajo, derecha arriba y derecha abajo. Para determinar el tamaño de la ventana 
 * del navegador, utilizar la función tamanoVentanaNavegador() proporcionada.
 * 
 * 
 * @author Manuel Ariza Serrano 
 */
{
    let elementoDiv;

    let inicio = function () {
        elementoDiv = document.getElementById("info");
        document.onclick = clickarPantalla;
    }

    window.onload = inicio;

    let clickarPantalla = function (evento) {
        let alturaTotal = window.innerHeight;
        let anchuraTotal = window.innerWidth;

        let coordX = evento.clientX;
        let coordY = evento.clientY;

        if (coordX < (anchuraTotal / 2) && coordY < (alturaTotal / 2)) {
            muestraInformacion(['Izquierda', 'Arriba']);
        } else if (coordX < (anchuraTotal / 2) && coordY > (alturaTotal / 2)) {
            muestraInformacion(['Izquierda', 'Abajo']);
        }
        if (coordX > (anchuraTotal / 2) && coordY < (alturaTotal / 2)) {
            muestraInformacion(['Derecha', 'Arriba']);
        } else if (coordX > (anchuraTotal / 2) && coordY > (alturaTotal / 2)) {
            muestraInformacion(['Derecha', 'Abajo']);
        }

    }

    function muestraInformacion(mensaje) {
        elementoDiv.innerHTML = '<h1>Posición</h1>';
        for (let i = 0; i < mensaje.length; i++) {
            elementoDiv.innerHTML += '<p>' + mensaje[i] + '</p>';
        }
    }
}
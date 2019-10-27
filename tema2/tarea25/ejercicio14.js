/**
 * A partir de la página web proporcionada, completar el código JavaScript para que:
 * 
 * Cuando se pinche sobre el primer enlace, se oculte su sección relacionada
 * Cuando se vuelva a pinchar sobre el mismo enlace, se muestre otra vez esa sección de contenidos
 * Completar el resto de enlaces de la página para que su comportamiento sea idéntico al del primer enlace
 * Cuando una sección se oculte, debe cambiar el mensaje del enlace asociado (pista: propiedad innerHTML)
 * 
 * @author Manuel Ariza Serrano
 * 
 */

function muestraOculta1() {
    let parrafo = document.getElementById("contenidos_1");
    let enlace = document.getElementById("enlace_1");

    if (parrafo.style.display == "" || parrafo.style.display == "block") {
        parrafo.style.display = "none";
        enlace.innerHTML = "Volver a mostrar";
    } else {
        parrafo.style.display = "block";
        enlace.innerHTML = "Mostrar parrafo";
    }

}
function muestraOculta2() {
    let parrafo = document.getElementById("contenidos_2");
    let enlace = document.getElementById("enlace_2");

    if (parrafo.style.display == "" || parrafo.style.display == "block") {
        parrafo.style.display = "none";
        enlace.innerHTML = "Volver a mostrar";
    } else {
        parrafo.style.display = "block";
        enlace.innerHTML = "Mostrar parrafo";
    }

}
function muestraOculta3() {
    let parrafo = document.getElementById("contenidos_3");
    let enlace = document.getElementById("enlace_3");

    if (parrafo.style.display == "" || parrafo.style.display == "block") {
        parrafo.style.display = "none";
        enlace.innerHTML = "Volver a mostrar";
    } else {
        parrafo.style.display = "block";
        enlace.innerHTML = "Mostrar parrafo";
    }

}

window.onload = function () {
    document.getElementById("enlace_1").onclick = muestraOculta1;
    document.getElementById("enlace_2").onclick = muestraOculta2;
    document.getElementById("enlace_3").onclick = muestraOculta3;
}
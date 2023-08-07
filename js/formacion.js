// Variables
const menu = document.querySelector(".nav-links");
const button = document.getElementById("buttonLuz");
const body = document.getElementById("body");

const h1SectionFormacion = document.querySelector(".h1SectionFormacion");

// Cambia el color del body
button.addEventListener('click', () => {
    if(button.checked){
        // menú hamburguesa
        menu.style.background = "#2E2E2E";

        // body
        body.style.background = "#2E2E2E";

        // section formacion
        h1SectionFormacion.style.color = "white";

    } else{
        // menú hamburguesa
        menu.style.background = "white";

        // body
        body.style.background = "white";

        // section formacion
        h1SectionFormacion.style.color = "black";
    }
});
// Variables
const menu = document.querySelector(".nav-links");
const button = document.getElementById("buttonLuz");
const body = document.getElementById("body");

const h1Section2 = document.querySelector(".h1SectionDos");

// Cambia el color del body
button.addEventListener('click', () => {
    if(button.checked){
        // menú hamburguesa
        menu.style.background = "#2E2E2E";

        // body
        body.style.background = "#2E2E2E";

        // section 2
        h1Section2.style.color = "white";

    } else{
        // menú hamburguesa
        menu.style.background = "white";

        // body
        body.style.background = "white";

        // Sección 2
        h1Section2.style.color = "black";
    }
});
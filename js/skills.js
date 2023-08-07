// Variables
const menu = document.querySelector(".nav-links");
const button = document.getElementById("buttonLuz");
const body = document.getElementById("body");

const h1Section3 = document.querySelector(".h1SectionTres");
const section3 = document.querySelector(".section3");

// Cambia el color del body
button.addEventListener('click', () => {
    if(button.checked){
        // menú hamburguesa
        menu.style.background = "#2E2E2E";

        // body
        body.style.background = "#2E2E2E";

        // section3
        section3.style.background = "#424242";
        h1Section3.style.color = "white";

    } else{
        // menú hamburguesa
        menu.style.background = "white";

        // body
        body.style.background = "white";

        // Sección 3
        section3.style.background = "#F2F2F2";
        h1Section3.style.color = "black";
    }
});
// Variables
const menu = document.querySelector(".nav-links");
const button = document.getElementById("buttonLuz");
const body = document.getElementById("body");

const section1 = document.querySelector(".sectionUno");
const textoContenido = document.querySelector(".textoContenido");
const texto = document.querySelector(".texto");
const div1 = document.querySelector(".div1");
const div2 = document.querySelector(".div2");
const div3 = document.querySelector(".div3");
const div4 = document.querySelector(".div4");

// Cambia el color del body
button.addEventListener('click', () => {
    if(button.checked){
        // menú hamburguesa
        menu.style.background = "#2E2E2E";

        // body
        body.style.background = "#2E2E2E";

        // cuadro central
        section1.style.background = "#424242";
        section1.style.borderRadius = "10px";
        textoContenido.style.background = "#2E2E2E";
        textoContenido.style.color = "white";
        texto.style.background = "#424242";

        // sección 1
        div1.style.background = "linear-gradient(-50deg, #424242 63%, rgba(128,0,255,1) 100%)";
        div2.style.background = "linear-gradient(50deg, #424242 63%, rgba(128,0,255,1) 100%)";
        div3.style.background = "linear-gradient(-130deg, #424242 63%, rgba(128,0,255,1) 100%)";
        div4.style.background = "linear-gradient(-230deg, #424242 63%, rgba(128,0,255,1) 100%)";

    } else{
        // menú hamburguesa
        menu.style.background = "white";

        // body
        body.style.background = "white";

        // cuadro central
        section1.style.background = "#F2F2F2";
        section1.style.borderRadius = "10px";
        textoContenido.style.background = "white";
        textoContenido.style.color = "black";
        texto.style.background = "#F2F2F2";

        // Sección 1
        div1.style.background = "linear-gradient(-50deg, #F2F2F2 63%, rgba(128,0,255,1) 100%)";
        div2.style.background = "linear-gradient(50deg, #F2F2F2 63%, rgba(128,0,255,1) 100%)";
        div3.style.background = "linear-gradient(-130deg, #F2F2F2 63%, rgba(128,0,255,1) 100%)";
        div4.style.background = "linear-gradient(-230deg, #F2F2F2 63%, rgba(128,0,255,1) 100%)";

    }
});
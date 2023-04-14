//---------- MENU HAMBURGUESA ----------//
const toggleButton = document.getElementById("button-menu");
const navWrapper = document.getElementById("nav");
const opcionesMenu = document.getElementById('nav-links');

toggleButton.addEventListener('click', open);
navWrapper.addEventListener('click', close);
opcionesMenu.addEventListener('click', closeBurguer);

// Se muestra el menú
function open(){
    toggleButton.classList.toggle("close");
    navWrapper.classList.toggle("show");
};

// Se cierra el menu
function close(e){
    if (e.target.id === "nav") {
        navWrapper.classList.remove("show");
        toggleButton.classList.remove("close");
    }
};

function closeBurguer(e){
    if (e.target.id === "menu") {
        navWrapper.classList.remove("show");
        toggleButton.classList.remove("close");
    }
};


//---------- COLORES ----------//
// Variables
const menu = document.querySelector(".nav-links");
const letrasMenu1 = document.querySelector('.letra1');
const letrasMenu2 = document.querySelector('.letra2');
const letrasMenu3 = document.querySelector('.letra3');
const letrasMenu4 = document.querySelector('.letra4');
const button = document.getElementById("buttonLuz");
const body = document.getElementById("body");

const section1 = document.querySelector(".sectionUno");
const textoContenido = document.querySelector(".textoContenido");
const texto = document.querySelector(".texto");
const div1 = document.querySelector(".div1");
const div2 = document.querySelector(".div2");
const div3 = document.querySelector(".div3");
const div4 = document.querySelector(".div4");

const h1Section2 = document.querySelector(".h1SectionDos");
const h1Section3 = document.querySelector(".h1SectionTres");

const section3 = document.querySelector(".section3");

const sectionContacto = document.querySelector('.sectionContacto');
const h1Contacto = document.querySelector('.h1Contacto');
const pContacto = document.querySelector('.pContacto');
const lateralIzquierda = document.querySelector('.lateralIzquierda');
const lateralDerecha = document.querySelector('.lateralDerecha');

const telefonoIzquierda = document.querySelector('.telefonoIzquierda');
const telefonoDerecha = document.querySelector('.telefonoDerecha');

// Eventos
button.addEventListener("click", cambiarBody);

// Cambia el color del body
function cambiarBody(){
    if(button.checked){
        // menú hamburguesa
        menu.style.background = "#2E2E2E";
        letrasMenu1.style.color = "white";
        letrasMenu2.style.color = "white";
        letrasMenu3.style.color = "white";
        letrasMenu4.style.color = "white";

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
        
        // section 2
        h1Section2.style.color = "white";

        // section3
        section3.style.background = "#424242";
        h1Section3.style.color = "white";

        // sección de contacto
        sectionContacto.style.background = "#424242";
        h1Contacto.style.color = "white";
        pContacto.style.color = "white";
        lateralIzquierda.style.background = "linear-gradient(-90deg, #424242 21%, rgba(128,0,255,1) 100%)";
        lateralDerecha.style.background = "linear-gradient(90deg, #424242 21%, rgba(128,0,255,1) 100%)";
        telefonoIzquierda.style.background = "#585858";
        telefonoIzquierda.style.borderRadius = "10px";
        telefonoDerecha.style.background = "#585858";
        telefonoDerecha.style.borderRadius = "10px";
        telefonoIzquierda.style.boxShadow = "#8000FF 0px 5px 15px";
        telefonoDerecha.style.boxShadow = "#8000FF 0px 5px 15px";

    } else{
        // menú hamburguesa
        menu.style.background = "#F2F2F2";
        letrasMenu1.style.color = "#444444";
        letrasMenu2.style.color = "#444444";
        letrasMenu3.style.color = "#444444";
        letrasMenu4.style.color = "#444444";

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
    
        // Sección 2
        h1Section2.style.color = "black";

        // Sección 3
        section3.style.background = "#F2F2F2";
        h1Section3.style.color = "black";

        // Sección de contacto
        sectionContacto.style.background = "#F2F2F2";
        h1Contacto.style.color = "black";
        pContacto.style.color = "black";
        lateralIzquierda.style.background = "linear-gradient(-90deg, #F2F2F2 21%, rgba(128,0,255,1) 100%)";
        lateralDerecha.style.background = "linear-gradient(90deg, #F2F2F2 21%, rgba(128,0,255,1) 100%)";
        telefonoIzquierda.style.background = "#F2F2F2";
        telefonoIzquierda.style.borderRadius = "10px";
        telefonoDerecha.style.background = "#F2F2F2";
        telefonoDerecha.style.borderRadius = "10px";
        telefonoIzquierda.style.boxShadow = "#8000FF 0px 5px 15px";
        telefonoDerecha.style.boxShadow = "#8000FF 0px 5px 15px";
    }
}

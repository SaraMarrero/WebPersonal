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
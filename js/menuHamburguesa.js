class MenuHamburguesa{
    constructor(toggleButton, navWrapper, opcionesMenu){
        this.toggleButton = toggleButton;
        this.navWrapper = navWrapper;
        this.opcionesMenu = opcionesMenu;
    }

    // Abre el menú hamburguesa
    open(){
        this.toggleButton.classList.toggle("close");
        this.navWrapper.classList.toggle("show");
    }

    // Cierra el menú hamburguesa
    close(e){
        if (e.target.id === "nav") {
            this.navWrapper.classList.remove("show");
            this.toggleButton.classList.remove("close");
        }
    }

    closeBurguer(e){
        if (e.target.id === "menu") {
            this.navWrapper.classList.remove("show");
            this.toggleButton.classList.remove("close");
        }
    };
}

// Variables
const toggleButton = document.getElementById("button-menu");
const navWrapper = document.getElementById("nav");
const opcionesMenu = document.getElementById('nav-links');

// Instancia la clase
let menu = new MenuHamburguesa(toggleButton, navWrapper, opcionesMenu);

// Eventos
toggleButton.addEventListener('click', () => menu.open())
navWrapper.addEventListener('click', (e) => menu.close(e));
opcionesMenu.addEventListener('click', (e) => menu.closeBurguer(e));


// // Variables
// const toggleButton = document.getElementById("button-menu");
// const navWrapper = document.getElementById("nav");
// const opcionesMenu = document.getElementById('nav-links');

// // Eventos
// toggleButton.addEventListener('click', open);
// navWrapper.addEventListener('click', close);
// opcionesMenu.addEventListener('click', closeBurguer);

// // Se muestra el menú
// function open(){
//     toggleButton.classList.toggle("close");
//     navWrapper.classList.toggle("show");
// };

// // Se cierra el menu
// function close(e){
//     if (e.target.id === "nav") {
//         navWrapper.classList.remove("show");
//         toggleButton.classList.remove("close");
//     }
// };

// function closeBurguer(e){
//     if (e.target.id === "menu") {
//         navWrapper.classList.remove("show");
//         toggleButton.classList.remove("close");
//     }
// };



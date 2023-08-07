// Variables
const body = document.getElementById("body");
const button = document.getElementById("buttonLuz");

// Modo oscuro
button.addEventListener('click', () => {
    if(button.checked){
        body.classList.add('modoOscuro');
    } else{
        body.classList.remove('modoOscuro');
    }
});
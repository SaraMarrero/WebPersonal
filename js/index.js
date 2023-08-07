// Variables
const button = document.getElementById("buttonLuz");
const body = document.getElementById("body");

// Activa y desactiva el modo oscuro
button.addEventListener('click', () => {
    if(button.checked){
        body.classList.add('modoOscuro');
    } else{
        body.classList.remove('modoOscuro');
    }
});
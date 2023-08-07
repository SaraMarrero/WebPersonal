//---------- MODO OSCURO ----------//
const button = document.getElementById("buttonLuz");
const body = document.getElementById("body");

// Eventos
button.addEventListener('click', modoOscuro);


document.addEventListener('DOMContentLoaded', function() {
    const modoOscuroActivo = localStorage.getItem('modoOscuro');
    
    if (modoOscuroActivo === 'true') {
        activarModoOscuro();
    }
});

// Activa y desactiva el modo oscuro con el botón
function modoOscuro() {
    if (button.checked) {
        body.classList.add('modoOscuro');
        localStorage.setItem('modoOscuro', 'true');
        button.checked = true;
    } else {
        body.classList.remove('modoOscuro');
        localStorage.removeItem('modoOscuro'); 
        button.checked = false;
    }
}

// Activa el modo oscuro con localStorage
function activarModoOscuro(){
    body.classList.add('modoOscuro');
    button.checked = false;
}
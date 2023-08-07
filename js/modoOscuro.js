//---------- MODO OSCURO ----------//
const button = document.getElementById("buttonLuz");
const body = document.getElementById("body");

// Eventos
button.addEventListener('click', modoOscuro);

// Activa el modo oscuro por localStorage
document.addEventListener('DOMContentLoaded', function() {
    const modoOscuroActivo = localStorage.getItem('modoOscuro');
    
    if (modoOscuroActivo === 'true') {
        activarModoOscuro();
        button.checked = true;
    }
});

// Activa y desactiva el modo oscuro con el botón
function modoOscuro() {
    if (button.checked) {
        body.classList.add('modoOscuro');
        localStorage.setItem('modoOscuro', 'true');
    } else {
        body.classList.remove('modoOscuro');
        localStorage.removeItem('modoOscuro'); 
    }
}

// Activa el modo oscuro con localStorage
function activarModoOscuro(){
    body.classList.add('modoOscuro');
}
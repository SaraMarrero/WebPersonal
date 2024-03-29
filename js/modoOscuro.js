class modoOscuro{
    constructor(button, body){
        this.button = button;
        this.body = body;
    }

    // Cambia de modo oscuro a claro
    oscuro(){
        if (this.button.checked) {
            this.body.classList.add('modoOscuro');
            localStorage.setItem('modoOscuro', 'true');
        } else {
            this.body.classList.remove('modoOscuro');
            localStorage.removeItem('modoOscuro'); 
        }
    }

    // Recge de localstorage que modo tiene activado
    localstorage(){
        const modoOscuroActivo = localStorage.getItem('modoOscuro');
    
        if (modoOscuroActivo === 'true') {
            this.activarModoOscuro();
            this.button.checked = true;
        }
    }

    activarModoOscuro(){
        this.body.classList.add('modoOscuro');
    }
}

// Variables
const button = document.getElementById("buttonLuz");
const body = document.getElementById("body");

// Instancia la clase
let modo = new modoOscuro(button, body);

// Eventos
document.addEventListener('DOMContentLoaded', () => modo.localstorage())
button.addEventListener('click', () => modo.oscuro());
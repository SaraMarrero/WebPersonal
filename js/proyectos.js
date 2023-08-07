// Variables
const button = document.getElementById("buttonLuz");
const body = document.getElementById("body");

button.addEventListener('click', () => {
    if(button.checked){
        body.classList.add('modoOscuro');
    } else{
        body.classList.remove('modoOscuro');
    }
});
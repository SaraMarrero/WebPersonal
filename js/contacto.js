// Variables
const buttonBody = document.getElementById("buttonLuz");
const body = document.getElementById("body");
const main = document.querySelector('.main');
const form = document.querySelector('.form');

const nombre = document.getElementById('nombre');
const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');
const buttonEnviar = document.getElementById('enviar');

const regExp = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
const table = document.querySelector('.table');
const msgEnvio = document.createElement('p');
const msgError = document.createElement('p');

// Eventos
buttonBody.addEventListener("click", cambiarBody);
buttonEnviar.addEventListener('click', camposCompletos);

// Cambia el color del body
function cambiarBody(){
    if(buttonBody.checked){
        body.style.background = "#2E2E2E";
        main.style.background = "#424242";
        main.style.borderRadius = "10px";
    } else{
        body.style.background = "white";
        main.style.background = "#F2F2F2";
        main.style.borderRadius = "10px";
    }
}

function camposCompletos(){
    if(nombre.value === '' || email.value === '' || asunto.value === '' || mensaje.value === ''){
        // modifica la clase dependiendo del mensaje
        msgEnvio.classList.remove('valido');
        msgEnvio.classList.add('error');

        // agrega el mensaje al html
        msgEnvio.textContent = 'Todos los campos son obligatorios';
        table.insertAdjacentElement('afterend', msgEnvio);

    } else if(nombre.value !== '' && email.value !== '' && asunto.value !== '' && mensaje.value !== ''){
        if((!email.value.match(regExp))){
            validarDatos(email);
        } else{
            // modifica la clase dependiendo del mensaje
            msgEnvio.classList.remove('error');
            msgEnvio.classList.add('valido');

            // agrega el mensaje al html
            msgEnvio.textContent = 'Se agregó correctamente';
            table.insertAdjacentElement('afterend', msgEnvio);

            form.setAttribute('action', 'https://formsubmit.co/52ceb9336b22c4c48e9cec87c3ab8d59');
        }
    }

    // borra el aviso y reinicia el formulario tras 2 segundos
    setTimeout(() => { 
        msgEnvio.remove();
    }, 2000);
}

// Valida que el formato del email sea correcto
function validarDatos(input){
    input.style.border = '1px solid red';

    // modifica la clase dependiendo del mensaje
    msgError.classList.remove('valido');
    msgError.classList.add('error');

    // agrega el mensaje al html
    msgError.textContent = 'Formato incorrecto';
    input.insertAdjacentElement('afterend', msgError);

    // borra el aviso tras dos segundos
    setTimeout(() => {
        input.style.border = '2px solid #8000FF';
        msgError.remove();
    }, 1500)
}
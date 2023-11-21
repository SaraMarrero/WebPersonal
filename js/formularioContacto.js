// Variables
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
buttonEnviar.addEventListener('click', camposCompletos);

//---------- VALIDACION DE LOS CAMPOS ----------//
// Valida que todos los campos esten rellenos
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

            form.setAttribute('action', 'https://formsubmit.co/saramarreromiranda@gmail.com');
        }
    }

    // borra el aviso y reinicia el formulario tras 2 segundos
    setTimeout(() => { 
        msgEnvio.remove();
        form.reset();
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
        form.reset();
    }, 2000)
}
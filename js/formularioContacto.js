import {nombre, email, asunto, mensaje, msgEnvio, msgError, form, pNombre, pEmail, pAsunto, pMensaje} from './variablesFormulario.js';

class Validaciones {
    constructor(nombre, email, asunto, mensaje) {
        this.nombre = nombre;
        this.email = email;
        this.asunto = asunto;
        this.mensaje = mensaje;
    }

    // Muestra el spinner
    showSpinner() {
        document.querySelector('.loader').style.display = 'block';
    }

    // Oculta el spinner
    hideSpinner() {
        document.querySelector('.loader').style.display = 'none';
    }
}

class Contacto extends Validaciones {
    constructor(nombre, email, asunto, mensaje) {
        super(nombre, email, asunto, mensaje);
    }

    camposCompletos(event) {
        const table = document.querySelector('.table');
        const regExp = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

        if(this.nombre.value == '' && this.email.value == '' && this.asunto.value == '' && (this.mensaje.value == '' || !this.email.value.match(regExp))) {
            // modifica la clase dependiendo del mensaje
            msgEnvio.classList.remove('valido');
            msgEnvio.classList.add('error');
    
            // agrega el mensaje al html
            msgEnvio.textContent = 'Todos los campos son obligatorios';
            table.insertAdjacentElement('afterend', msgEnvio);

            setTimeout(function(){
                location.href = "https://saramarrero.github.io/WebPersonal/html/contacto.html";
            }, 3000)

        } else {
            buttonEnviar.disabled = false;
            // Muestra el spinner
            this.showSpinner();

            // Oculta el spinner y da un aviso
            setTimeout(() => {
                this.hideSpinner();

                // modifica la clase dependiendo del mensaje
                msgEnvio.classList.remove('error');
                msgEnvio.classList.add('valido');

                // agrega el mensaje al html
                msgEnvio.textContent = 'Se envió correctamente';
                table.insertAdjacentElement('afterend', msgEnvio);

                // Envía el correo electrónico
                form.setAttribute('action', 'https://formsubmit.co/saramarreromiranda@gmail.com');
            }, 2000);

            // Envía el formulario
            setTimeout(() => {
                event.target.form.submit();
            }, 2500);
        }

        // Borra el aviso y reinicia el formulario tras 4 segundos
        setTimeout(() => {
            msgEnvio.remove();
        }, 4000);
    }
}

// Valida los campos de manera individual
function camposVacios(input, msg, td){
    input.style.border = '1px solid red';

    // modifica la clase dependiendo del mensaje
    msgError.classList.remove('valido');
    msgError.classList.add('error');

    // agrega el mensaje al html
    msgError.textContent = msg;

    td.appendChild(msgError);

    // borra el aviso tras dos segundos
    setTimeout(function(){
        pNombre.textContent = '';
        pEmail.textContent = '';
        pAsunto.textContent = '';
        pMensaje.textContent = '';
        input.style.border = '2px solid #8000FF';
        msgError.remove();
        buttonEnviar.disabled = false;
    }, 3000);
}

// Oculta el spinner
document.querySelector('.loader').style.display = 'none';

// Recoge los datos del html
const buttonEnviar = document.querySelector('#enviar');

// Valida el campo nombre
nombre.addEventListener('keyup', ()=>{
    
    const tdNombre = document.querySelector('.tdNombre');

    if(nombre.value === ''){
        camposVacios(nombre, 'Introduzca un nombre válido', tdNombre);
        pNombre.textContent = '❌'
        buttonEnviar.disabled = true;
    }else{
        nombre.style.border = '2px solid green';
        pNombre.textContent = '✔️';
    }
});

// Valida el campo asunto
asunto.addEventListener('keyup', ()=>{
    
    const tdAsunto = document.querySelector('.tdAsunto');

    if(asunto.value === ''){
        camposVacios(asunto, 'Introduzca un asunto válido', tdAsunto);
        pAsunto.textContent = '❌'
        buttonEnviar.disabled = true;
    } else{
        asunto.style.border = '2px solid green';
        pAsunto.textContent = '✔️';
    }
});

// Valida el campo mensaje
mensaje.addEventListener('keyup', ()=>{
    
    const tdMensaje = document.querySelector('.tdMensaje');

    if(mensaje.value === ''){
        camposVacios(mensaje, 'Introduzca un mensaje válido', tdMensaje);
        pMensaje.textContent = '❌'
        buttonEnviar.disabled = true;
    }else{
        mensaje.style.border = '2px solid green';
        pMensaje.textContent = '✔️';
    }
});

// Valida el campo email
email.addEventListener('keyup', ()=>{
    
    const tdEmail = document.querySelector('.tdEmail');

    if(email.value === ''){
        camposVacios(email, 'Introduzca un email válido', tdEmail);
        pEmail.textContent = '❌'
        buttonEnviar.disabled = true;
    }else{
        email.style.border = '2px solid green';
        pEmail.textContent = '✔️';
    }
});

buttonEnviar.addEventListener('click', (event) => {
    // Evita el envío predeterminado del formulario
    event.preventDefault();
    
    // Instancia la clase
    let formulario = new Contacto(nombre, email, asunto, mensaje);
    
    // Valida y envía el correo
    formulario.camposCompletos(event);

    // Reinicia el formulario 
    setTimeout(function(){
        pNombre.textContent = '';
        pAsunto.textContent = '';
        pMensaje.textContent = '';
        pEmail.textContent = '';
        form.reset();
    },3000);
});

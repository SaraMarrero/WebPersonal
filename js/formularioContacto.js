class Validaciones {
    constructor(nombre, email, asunto, mensaje) {
        this.nombre = nombre;
        this.email = email;
        this.asunto = asunto;
        this.mensaje = mensaje;
    }

    validarDatos(input, msgError,msg) {
        input.style.border = '1px solid red';

        // modifica la clase dependiendo del mensaje
        msgError.classList.remove('valido');
        msgError.classList.add('error');

        // agrega el mensaje al html
        msgError.textContent = msg;
        input.insertAdjacentElement('afterend', msgError);

        // borra el aviso tras dos segundos
        setTimeout(() => {
            input.style.border = '2px solid #8000FF';
            msgError.remove();
        }, 3000);
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
        const regExp = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        const table = document.querySelector('.table');

        if(this.nombre.value === '' && this.email.value === '' && this.asunto.value === '' && this.mensaje.value === '') {
            // modifica la clase dependiendo del mensaje
            msgEnvio.classList.remove('valido');
            msgEnvio.classList.add('error');
    
            // agrega el mensaje al html
            msgEnvio.textContent = 'Todos los campos son obligatorios';
            table.insertAdjacentElement('afterend', msgEnvio);

            setTimeout(function(){
                // location.href = "https://saramarrero.github.io/WebPersonal/html/contacto.html";
                location.href = "/html/contacto.html";
            }, 3000)

        } else if(this.nombre.value !== '' && this.email.value !== '' && this.asunto.value !== '' && this.mensaje.value !== '') {
            if (!this.email.value.match(regExp)) {
                this.validarDatos(this.email, msgError,  'Formato incorrecto');

                setTimeout(function(){
                    // location.href = "https://saramarrero.github.io/WebPersonal/html/contacto.html";
                    location.href = "/html/contacto.html";
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
                    // form.setAttribute('action', 'https://formsubmit.co/saramarreromiranda@gmail.com');
                }, 2000);

                // Envía el formulario
                setTimeout(() => {
                    event.target.form.submit();
                }, 2500);
            }
        }

        // Borra el aviso y reinicia el formulario tras 4 segundos
        setTimeout(() => {
            msgEnvio.remove();
            // form.reset();
        }, 4000);
    }
}

function camposVacios(input, msg){
    input.style.border = '1px solid red';

    // modifica la clase dependiendo del mensaje
    msgError.classList.remove('valido');
    msgError.classList.add('error');

    // agrega el mensaje al html
    msgError.textContent = msg;
    input.insertAdjacentElement('afterend', msgError);

    // borra el aviso tras dos segundos
    setTimeout(() => {
        input.style.border = '2px solid #8000FF';
        msgError.remove();
        buttonEnviar.disabled = false;
    }, 3000);
}

// Oculta el spinner
document.querySelector('.loader').style.display = 'none';

// Recoge los datos del html
const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');
const msgEnvio = document.createElement('p');
const msgError = document.createElement('p');
const form = document.querySelector('.form');

const buttonEnviar = document.querySelector('#enviar');

// Valida el campo nombre
nombre.addEventListener('mouseout', ()=>{
    if(nombre.value === ''){
        camposVacios(nombre, 'Introduzca un nombre válido', form);
        buttonEnviar.disabled = true;
    }
});

// Valida el campo asunto
asunto.addEventListener('mouseout', ()=>{
    if(asunto.value === ''){
        camposVacios(asunto, 'Introduzca un nombre válido', form);
        buttonEnviar.disabled = true;
    }
});

// Valida el campo mensaje
mensaje.addEventListener('mouseout', ()=>{
    if(mensaje.value === ''){
        camposVacios(mensaje, 'Introduzca un nombre válido', form);
        buttonEnviar.disabled = true;
    }
});

buttonEnviar.addEventListener('click', (event) => {
    // Evita el envío predeterminado del formulario
    event.preventDefault();
    
    // Instancia la clase
    let formulario = new Contacto(nombre, email, asunto, mensaje);
    
    // Valida y envía el correo
    formulario.camposCompletos(event);

    setTimeout(function(){
        form.reset();
    },3000)
});

class Contacto{
    constructor(nombre, email, asunto, mensaje){
        this.nombre = nombre;
        this.email = email;
        this.asunto = asunto;
        this.mensaje = mensaje;
    }

    validarDatos(input, msgError, form){
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

    camposCompletos(){
        const form = document.querySelector('.form');
        const regExp = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        const table = document.querySelector('.table');
        const msgEnvio = document.createElement('p');
        const msgError = document.createElement('p');

        if(this.nombre === '' || this.email === '' || this.asunto === '' || this.mensaje === ''){
            // modifica la clase dependiendo del mensaje
            msgEnvio.classList.remove('valido');
            msgEnvio.classList.add('error');
    
            // agrega el mensaje al html
            msgEnvio.textContent = 'Todos los campos son obligatorios';
            table.insertAdjacentElement('afterend', msgEnvio);
    
        } else if(this.nombre !== '' && this.email !== '' && this.asunto !== '' && this.mensaje !== ''){
            if((!this.email.match(regExp))){
                this.validarDatos(this.email, msgError, form);
            } else{
                // modifica la clase dependiendo del mensaje
                msgEnvio.classList.remove('error');
                msgEnvio.classList.add('valido');
    
                // agrega el mensaje al html
                msgEnvio.textContent = 'Se envió correctamente';
                table.insertAdjacentElement('afterend', msgEnvio);
    
                form.setAttribute('action', 'https://formsubmit.co/saramarreromiranda@gmail.com');
                // form.setAttribute('action', 'https://formsubmit.co/52ceb9336b22c4c48e9cec87c3ab8d59');
            }
        }

        // borra el aviso y reinicia el formulario tras 2 segundos
        setTimeout(() => { 
            msgEnvio.remove();
            form.reset();
        }, 2000);
    }
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');

const buttonEnviar = document.querySelector('#enviar');


buttonEnviar.addEventListener('button', () =>{
    let formulario = new Contacto(nombre.value, email.value, asunto.value, mensaje.value);

    formulario.camposCompletos()
});
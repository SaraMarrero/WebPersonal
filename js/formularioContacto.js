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
        }, 3000)
    }

    camposCompletos(event){
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

            setTimeout(function(){
                location.href = "https://saramarrero.github.io/WebPersonal/html/contacto.html";
            }, 3000)
    
        } else if(this.nombre !== '' && this.email !== '' && this.asunto !== '' && this.mensaje !== ''){
            if((!this.email.match(regExp))){
                this.validarDatos(this.email, msgError, form);
                
                setTimeout(function(){
                    location.href = "https://saramarrero.github.io/WebPersonal/html/contacto.html";
                }, 3000)

            } else{
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

                // envía el formulario
                setTimeout(function(){
                    event.target.form.submit();
                    console.log('a')
                }, 2500);
            }
        }

        // Borra el aviso y reinicia el formulario tras 2 segundos
        setTimeout(() => { 
            msgEnvio.remove();
            form.reset();
        }, 4000);
    }

    // Muestra el spinner
    showSpinner(){
        document.querySelector('.loader').style.display = 'block';
    }

    // Oculta el spinner
    hideSpinner(){
        document.querySelector('.loader').style.display = 'none';
    }
}

// Oculta el spinner
document.querySelector('.loader').style.display = 'none';

// Recoge los datos del html
const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');

const buttonEnviar = document.querySelector('#enviar');

buttonEnviar.addEventListener('click', (event) =>{
    // Evita el envío predeterminado del formulario
    event.preventDefault(); 

    // Instancia la clase
    let formulario = new Contacto(nombre.value, email.value, asunto.value, mensaje.value);
    
    // Valida y envía el correo
    formulario.camposCompletos(event);
});
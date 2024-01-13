import {nombre, email, asunto, mensaje} from './variablesFormulario.js';

class Almacenamiento{

    constructor(){
        this.cookie = [];
        this.contador = 0;
        this.contacto = [];
    }

    almacenarContactos(){
        // Almacena los datos del formulario
        let contactos = {
            'nombre': nombre.value,
            'email': email.value,
            'asunto': asunto.value,
            'mensaje': mensaje.value
        }
    
        // Crea la cookie
        this.contador += 1;
        let newCookie = document.cookie = `Contacto ${this.contador}=${JSON.stringify(contactos)}; max-age=${60*60*24*365}; path=/`;
        this.cookie.push(newCookie);
    
        return this.cookie;
    }

    leerCookie() {
        this.almacenarContactos();
    
        // Recoge los datos de la cookie y los alamcena en un array
        let contactosArray = [];
    
        for (let i = 0; i < this.cookie.length; i++) {
            let datosCookie = this.cookie[i].split('"');
            let nombreContacto = datosCookie[3];
            let emailContacto = datosCookie[7];
            let asuntoContacto = datosCookie[11];
            let mensajeContacto = datosCookie[15];
    
            let contacto = {
                'nombre': nombreContacto,
                'email': emailContacto,
                'asunto': asuntoContacto,
                'mensaje': mensajeContacto
            };
    
            contactosArray.push(contacto);
        }
    
        this.contacto = contactosArray;

        return this.contacto;
    }

    // Muestra la cookie en el html
    mostrarContacto(){
        this.leerCookie();

        let ul = document.querySelector('.mostrar');
        this.limmpiarHTML(ul);

        this.contacto.forEach(e => {

            ul.innerHTML += `
                <li>Nombre: ${e.nombre}</li>
                <li>Email: ${e.email}</li>
                <li>Asunto: ${e.asunto}</li>
                <li>Mensaje: ${e.mensaje}</li>
                <hr>
            `;
        });
    }

    // Limpia el html
    limmpiarHTML(ul){
        while(ul.firstChild){
            ul.removeChild(ul.firstChild);
        }
    }
}


// Oculta el spinner
document.querySelector('.loader').style.display = 'none';

// Instancia la clase y ejecuta el evento
const buttonEnviar = document.querySelector('#enviar');
let almacenamiento = new Almacenamiento(); 

buttonEnviar.addEventListener('click', () => {

    almacenamiento.mostrarContacto();
})
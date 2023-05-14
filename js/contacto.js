// Variables
const buttonBody = document.getElementById("buttonLuz");
const body = document.getElementById("body");
const main = document.querySelector('.main');

const nombre = document.getElementById('nombre');
const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');
const buttonEnviar = document.getElementById('enviar');

// Eventos
buttonBody.addEventListener("click", cambiarBody);

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

// Valida el campo del nombre
nombre.addEventListener('blur', () => {
    
    if(nombre.value.length <= 0){
        nombre.style.border = '1px solid red';
        document.getElementById('trNombre').innerHTML = '<p style="color: red">Debe rellenar todos los campos</p>';
        buttonEnviar.style.background = 'red';
        buttonEnviar.disabled = true;
    } else{
        nombre.style.border = '1px solid lightgreen';
        document.getElementById('trNombre').innerHTML = ' ';
    }

    // Comprueba que los datos estan correctos y habilita el botón de enviar
    if(mensaje.value.length > 0 && email.value.length > 0 && asunto.value.length > 0 && mensaje.value.length > 0){
        buttonEnviar.style.background = 'lightgreen';
        buttonEnviar.disabled = false;
    }
});

// Valida el campo del email
email.addEventListener('blur', () => {
    
    if(email.value.length <= 0){
        email.style.border = '1px solid red';
        document.getElementById('trEmail').innerHTML = '<p style="color: red">Debe rellenar todos los campos</p>';
        buttonEnviar.style.background = 'red';
        buttonEnviar.disabled = true;
    } else{
        email.style.border = '1px solid lightgreen';
        document.getElementById('trEmail').innerHTML = ' ';
    }

    // Comprueba que los datos estan correctos y habilita el botón de enviar
    if(mensaje.value.length > 0 && email.value.length > 0 && asunto.value.length > 0 && mensaje.value.length > 0){
        buttonEnviar.style.background = 'lightgreen';
        buttonEnviar.disabled = false;
    }
});

// Valida el campo del asunto
asunto.addEventListener('blur', () => {
    
    if(asunto.value.length <= 0){
        asunto.style.border = '1px solid red';
        document.getElementById('trAsunto').innerHTML = '<p style="color: red">Debe rellenar todos los campos</p>';
        buttonEnviar.style.background = 'red';
        buttonEnviar.disabled = true;
    } else{
        asunto.style.border = '1px solid lightgreen';
        document.getElementById('trAsunto').innerHTML = ' ';
    }

    // Comprueba que los datos estan correctos y habilita el botón de enviar
    if(mensaje.value.length > 0 && email.value.length > 0 && asunto.value.length > 0 && mensaje.value.length > 0){
        buttonEnviar.style.background = 'lightgreen';
        buttonEnviar.disabled = false;
    }
});    

// Valida el campo del mensaje
mensaje.addEventListener('blur', () => {
    
    if(mensaje.value.length <= 0){
        mensaje.style.border = '1px solid red';
        document.getElementById('trMensaje').innerHTML = '<p style="color: red">Debe rellenar todos los campos</p>';
        buttonEnviar.style.background = 'red';
        buttonEnviar.disabled = true;
    } else{
        mensaje.style.border = '1px solid lightgreen';
        document.getElementById('trMensaje').innerHTML = ' ';
    }

    // Comprueba que los datos estan correctos y habilita el botón de enviar
    if(mensaje.value.length > 0 && email.value.length > 0 && asunto.value.length > 0 && mensaje.value.length > 0){
        buttonEnviar.style.background = 'lightgreen';
        buttonEnviar.disabled = false;
    }
}); 
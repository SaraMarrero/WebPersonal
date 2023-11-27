import { arrayProyects } from "./proyectos.js";

class Ordenar{
    constructor(){
        this.proyects = arrayProyects;
    }

    // Ordena los proyectos de manera ascendente
    ascendente(){
        this.proyects.sort((a,b) => a.nombre.localeCompare(b.nombre)); 
        return this.proyects;
    }

    // Ordena los proyectos de manera descendente
    descendente(){
        this.proyects.sort((a,b) => b.nombre.localeCompare(a.nombre)); 
        return this.proyects;
    }

    limpiarHtml(article){
        while(article.firstChild){
            article.removeChild(article.firstChild);
        }
    }

    mostrarProyectos(){
        const article = document.querySelector('.articleProyectos');
        this.limpiarHtml(article);

        this.proyects.forEach(e => {
            console.log(e);
        
            article.innerHTML += `
                <div class="divProyecto${e.id}">
                    <div class="divImgProyecto${e.id}">
                        <img src="${e.imagen}" class="imgProyecto${e.id}">
                    </div>

                    <div class="datosProyecto${e.id}">
                        <h2 class="h2Proyecto${e.id}">${e.nombre}</h2>
                        <p class="pProyecto${e.id}">${e.descripcion}</p>
                    
                        <div class="enlacesProyecto${e.id}">
                            <p><a href="${e.codigo}" class="aProyecto${e.id}">Código</a></p>
                            <p><a href="${e.descripcion}" class="aProyecto${e.id}">Website</a></p>
                        </div>
                    </div>
                </div>
            `;
        });
    }
}

// Recoge los datos del html
const select = document.querySelector('.ordenar');

document.addEventListener('DOMContentLoaded', () => {
    // Instancia la clase
    let option = new Ordenar();

    // Muesta los proyectos
    option.mostrarProyectos();
})

select.addEventListener('change', (e) => {
    // Instancia la clase
    let option = new Ordenar();

    // Si se selecciona alguna opción
    if(select.vallue !== ''){
        switch(e.target.value){
            case 'asc':
                option.ascendente();
                option.mostrarProyectos()
                break;
            
            case 'desc':
                option.descendente();
                option.mostrarProyectos();
                break;
        }
    }
})
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

            let tecnologias = e.tecnologias.split(',');

            tecnologias = tecnologias.map(tecnologia => tecnologia.trim());
        
            article.innerHTML += `
            <div class="cardProyectos relative flex flex-col w-full sm:w-1/2 md:w-1/3 lg:w-1/4 max-w-[26rem] rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg mb-4 sm:mb-0" style="box-shadow: #8000FF 0px 5px 15px; padding-bottom: 60px;">
    <div class="relative mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40 image-container" style="height: 200px;">
        <img src="${e.imagen}" alt="${e.nombre}" class="object-cover w-full h-full scroll-image"/>
        <div class="absolute inset-0 w-full h-full bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
    </div>

    <div class="p-4">
        <div class="flex items-center justify-between mb-2">
            <h5 class="block text-xl antialiased font-medium leading-snug tracking-normal text-blue-gray-900">${e.nombre}</h5>
            <p class="flex items-center gap-1.5 text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="-mt-0.5 h-5 w-5 text-yellow-700">
                    <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"></path>
                </svg>
                5.0
            </p>
        </div>

        <p class="block text-base">${e.descripcion}</p>

        <div class="inline-flex flex-wrap items-center gap-2 mt-4 group">
            <span class="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-2">
                <a href="https://developer.mozilla.org/es/docs/Web/HTML">
                    <img src="/img/html-proyectos.svg" style="width: 27px; height: 27px;">
                </a>
            </span>
            <span class="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-2">
                <a href="https://developer.mozilla.org/es/docs/Web/CSS">
                    <img src="/img/css-proyectos.svg" style="width: 27px; height: 27px;">
                </a>
            </span>
            <span class="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-2">
                <a href="https://developer.mozilla.org/es/docs/Web/JavaScript">
                    <img src="/img/js-proyectos.svg" style="width: 27px; height: 27px;">
                </a>
            </span>
            <span class="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-2">
                <a href="https://docs.github.com/es">
                    <img src="/img/github-proyectos.svg" style="width: 27px; height: 27px;">
                </a>
            </span>
            ${tecnologias.includes('bootstrap') ? `
            <span class="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-2">
                <a href="https://getbootstrap.com">
                    <img src="/img/bootstrap-proyectos.svg" style="width: 27px; height: 27px;">
                </a>
            </span>` : ''}
            ${tecnologias.includes('ajax') ? `
            <span class="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-2">
                <a href="https://developer.mozilla.org/es/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data">
                    <img src="/img/ajax-proyectos.svg" style="width: 27px; height: 27px;">
                </a>
            </span>` : ''}
            ${tecnologias.includes('jquery') ? `
            <span class="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-2">
                <a href="https://api.jquery.com">
                    <img src="/img/jquery-proyectos.svg" style="width: 27px; height: 27px;">
                </a>
            </span>` : ''}
            ${tecnologias.includes('php') ? `
            <span class="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-2">
                <a href="https://www.php.net">
                    <img src="/img/php-proyectos.svg" style="width: 27px; height: 27px;">
                </a>
            </span>` : ''}
            ${tecnologias.includes('tailwind') ? `
            <span class="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-2">
                <a href="https://tailwindcss.com">
                    <img src="/img/tailwind-proyectos.svg" style="width: 27px; height: 27px;">
                </a>
            </span>` : ''}
            ${tecnologias.includes('xampp') ? `
            <span class="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-2">
                <a href="https://www.apachefriends.org/es/index.html">
                    <img src="/img/xampp-proyectos.svg" style="width: 27px; height: 27px;">
                <a/>
            </span>` : ''}
        </div>
    </div>

    <div class="absolute bottom-0 left-0 right-0 p-4 pt-2 flex flex-col md:flex-row justify-between w-full">
        <a href="${e.codigo}" class="block w-full md:w-1/2 rounded-lg py-2 px-4 text-center align-middle text-sm font-bold uppercase text-white mb-2 md:mb-0 md:mr-1" type="button" style="background-color: #ab57ff;">Código</a>
        <a href="${e.website}" class="block w-full md:w-1/2 rounded-lg py-2 px-4 text-center align-middle text-sm font-bold uppercase text-white md:ml-1" type="button" style="background-color: #8000FF;">Web</a>
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
class Ordenar{
    constructor(proyect1, proyect2, proyect3, proyect4, proyect5, proyect6){
        this.proyect1 = proyect1;
        this.proyect2 = proyect2;
        this.proyect3 = proyect3;
        this.proyect4 = proyect4;
        this.proyect5 = proyect5;
        this.proyect6 = proyect6;
        this.proyects = [];
    }

    // Rellena el array con los nombres de los proyectos
    datosArray(){
        this.proyects = [`${this.proyect1}`, `${this.proyect2}`, `${this.proyect3}`, `${this.proyect4}`, `${this.proyect5}`, `${this.proyect6}`];
    }

    // Ordena los proyectos de manera ascendente
    ascendente(){
        this.datosArray();
        this.proyects.sort((a,b) =>  a.localeCompare(b)); 
        return this.proyects;
    }

    // Ordena los proyectos de manera descendente
    descendente(){
        this.datosArray();
        this.proyects.sort((a,b) =>  b.localeCompare(a)); 
        return this.proyects;
    }

    mostrarProyectos(){
        this.datosArray();

        this.datosArray.forEach(e => {
            const article = document.querySelector('.articleProyectos');

            article.innerHTML += `
                <div class="divProyecto1">
                    <div class="divImgProyecto1">
                        <img src="../img/juego1.jpg" class="imgProyecto1">
                    </div>

                    <div class="datosProyecto1">
                        <h2 class="h2Proyecto1">Piedra papel tijera lagarto spock</h2>
                        <p class="pProyecto1">Este proyecto va sobre el juego piedra, papel, tijera, lagarto, spock.</p>
                    
                        <div class="enlacesProyecto1">
                            <p><a href="https://github.com/SaraMarrero/Piedra_Papel_Tijera_Lagarto_Spock" class="aProyecto1">Código</a></p>
                            <p><a href="https://saramarrero.github.io/Piedra_Papel_Tijera_Lagarto_Spock/" class="aProyecto1">Website</a></p>
                        </div>
                    </div>
                </div>
            `;
        });
    }
}

// Recoge los datos del html
const proyect1 = document.querySelector('.h2Proyecto1');
const proyect2 = document.querySelector('.h2Proyecto2');
const proyect3 = document.querySelector('.h2Proyecto3');
const proyect4 = document.querySelector('.h2Proyecto4');
const proyect5 = document.querySelector('.h2Proyecto5');
const proyect6 = document.querySelector('.h2Proyecto6');

const select = document.querySelector('.ordenar');

select.addEventListener('change', (e) => {
    // Instancia la clase
    let option = new Ordenar(proyect1.textContent, proyect2.textContent, proyect3.textContent, proyect4.textContent, proyect5.textContent, proyect6.textContent);

    // Si se selecciona alguna opción
    if(select.vallue !== ''){
        switch(e.target.value){
            case 'asc':
                option.ascendente()
                option.mostrarProyectos()
                break;
            
            case 'desc':
                option.descendente();
                option.mostrarProyectos();
                break;
        }
    }
})
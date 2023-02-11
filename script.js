let menuVisible = false;
//Funcion que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList="";
        menuVisible=false;
    }else{
        document.getElementById("nav").classList="responsive";
        menuVisible=true;
    }
}

function seleccionar(){
    //oculta el menu una vez que selecciono una opcion
    document.getElementById("nav").classList="";
    menuVisible=false;
}

//funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("HTMLCSS");
        habilidades[2].classList.add("NET");
        habilidades[3].classList.add("Batabase");
        habilidades[4].classList.add("Pascal");
        habilidades[5].classList.add("English");
        habilidades[6].classList.add("Comunicacion");
        habilidades[7].classList.add("organizacion");
        habilidades[8].classList.add("Proactividad");
        habilidades[9].classList.add("Dedicacion");
        habilidades[10].classList.add("Concentración");
        habilidades[11].classList.add("Autogestion");
    }

}




document.addEventListener("DOMContentLoaded", CargarTema);

let esOscuro = false;

const TemaClaro = {
  "--color-background": "#F4EAE4",
  "--color-background-header": "#BE9A70",
  "--color-background-footer": "#BE9A70",
  "--color-background-card": "#fff",
  "--color-text": "#3c3c3c",
  "--color-text-inverted": "#f0f0f0",
  "--color-separador": "#ebebeb",
  "--color-link": "#0000ee"
};

const TemaOscuro = {
    "--color-background": "#1E1E2C",
    "--color-background-header": "#2D2D44",
    "--color-background-footer": "#2D2D44",
    "--color-background-card": "#2D2D44",
    "--color-text": "#f0f0f0",
    "--color-text-inverted": "#f0f0f0",
    "--color-separador": "#2D2D44",
    "--color-link": "#6767f8",
  };

function CargarTema() {
    CrearEventoToggle()
    ActualizarTema()
}

function CrearEventoToggle(){
    const toggle = document.getElementById("cambiar-tema") 
    toggle.addEventListener("click",(e)=>{
        e.preventDefault()
        esOscuro = !esOscuro
        toggle.innerHTML = !esOscuro ? '🌙' : '☀';
        ActualizarTema()
    })
}

function ActualizarTema(){
    const tema = esOscuro ? TemaOscuro : TemaClaro
    var root = document.querySelector(':root');
    for(let k in tema){
        root.style.setProperty(k, tema[k])
    }
}
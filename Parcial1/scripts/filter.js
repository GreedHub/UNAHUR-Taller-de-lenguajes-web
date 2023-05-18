document.addEventListener("DOMContentLoaded",CargarFiltros);

function CargarFiltros(){
    const generos = ObtenerGeneros()
    AgregarFiltro("Todos",true)
    generos.forEach(genero=>AgregarFiltro(genero))
}

function AgregarFiltro(genero,isChecked=false){
    const filtros = document.getElementById("filtro-generos")

    if (!filtros) return

    const filtro = CrearFiltro(genero,isChecked)

    filtros.appendChild(filtro)
}

function CrearFiltro(genero,isChecked=false){
    const filtro = document.createElement("span")
    const radio = document.createElement("input")
    radio.setAttribute('type','radio')
    radio.setAttribute('id',`rad_${genero}`)
    radio.setAttribute('name','filtro-generos-radio')
    radio.setAttribute('value',genero)
    radio.addEventListener('change',ActualizarLibros)
    if(isChecked) radio.setAttribute('checked',true)

    const label = document.createElement("label")
    
    label.setAttribute('for',`rad_${genero}`)
    label.innerText = genero

    filtro.appendChild(radio)
    filtro.appendChild(label)

    return filtro
}
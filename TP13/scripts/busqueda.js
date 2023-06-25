document.addEventListener("DOMContentLoaded",AgregarEventoBuqueda)

function AgregarEventoBuqueda(){

    const form = document.getElementById("busqueda")

    form.addEventListener("submit",EventoBusqueda)
}

function EventoBusqueda(e){
    e.preventDefault()
    const busqueda = e.target.buscar.value;
    const baseUrlBusqueda = "https://www.google.com/search?q="
    const urlBusqueda = `${baseUrlBusqueda}${busqueda}`
    window.location.assign(urlBusqueda)
}
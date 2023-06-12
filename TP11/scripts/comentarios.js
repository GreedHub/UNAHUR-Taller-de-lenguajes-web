document.addEventListener("DOMContentLoaded",AdministradorComentarios)

const comentarios = []

function AdministradorComentarios(){
    const form = document.getElementById('agregar-comentario')

    form.addEventListener("submit",AlAgregarUnComentario)

}

function AlAgregarUnComentario(e){
    e.preventDefault()
    const nombre = e.target.elements.nombre.value
    const mensaje = e.target.mensaje.value
    AgregarComentarios(nombre,mensaje)
    ActualizarComentarios()
}

function AgregarComentarios(nombre,mensaje){
    const date = new Date(Date.now())

    const dia = date.getDate()
    const mes = date.getMonth()
    const anio = date.getFullYear()

    const fecha = `${dia}/${mes}/${anio}`

    comentarios.push(
        {
            nombre,
            mensaje,
            fecha,
        }
    )
}

function ActualizarComentarios(){
    const root = document.getElementById("comentarios")
    root.innerHTML = ''

    const elementosComentario = comentarios.map((comentario,id) => CrearComentario(comentario,id+1))

    elementosComentario.forEach(comentario => root.appendChild(comentario))
}

function CrearComentario(comentario,id){

    const elementoFila = document.createElement("tr")

    const elementoId = document.createElement("th")
    elementoId.innerHTML = id
    elementoId.setAttribute("scope","row")
    
    const elementoFecha = document.createElement("td")
    elementoFecha.innerHTML = comentario.fecha

    const elementoNombre = document.createElement("td")
    elementoNombre.innerHTML = comentario.nombre

    const elementoMensaje = document.createElement("td")
    elementoMensaje.innerHTML = comentario.mensaje


    elementoFila.appendChild(elementoId)
    elementoFila.appendChild(elementoFecha)
    elementoFila.appendChild(elementoNombre)
    elementoFila.appendChild(elementoMensaje)

    return elementoFila

}
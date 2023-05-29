document.addEventListener("DOMContentLoaded",CargarImagenes)

function CargarImagenes(){
    for(let i=1; i<=9; i++){
        AgregarImagen(i)
    }
}

function AgregarImagen(id){
    const galeria = document.getElementById("galeria")

    const img = document.createElement("img")
    img.setAttribute("src",`./img/art/${id}.jpeg`)
    img.setAttribute("alt",`imagen_de_galeria_${id}`)

    galeria.appendChild(img)
}


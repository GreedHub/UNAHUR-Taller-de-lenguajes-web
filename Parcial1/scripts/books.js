document.addEventListener("DOMContentLoaded",CargarLibros);

const libros =  [
    {
        "nombre": "1984",
        "descripcion": "Una novela distópica que presenta un mundo totalitario donde el gobierno controla todos los aspectos de la vida de las personas.",
        "imagen": "1984.jpg",
        "genero": "Ficción distópica"
    },
    {
        "nombre": "Orgullo y prejuicio",
        "descripcion": "Una historia de amor y clases sociales en la Inglaterra del siglo XIX, escrita por Jane Austen.",
        "imagen": "orgullo-y-prejuicio.jpg",
        "genero": "Novela romántica"
    },
    {
        "nombre": "Harry Potter y la piedra filosofal",
        "descripcion": "La primera entrega de la saga de Harry Potter, que narra las aventuras del famoso aprendiz de mago.",
        "imagen": "harry-potter-y-la-piedra-filosofal.jpg",
        "genero": "Juvenil"
    },
    {
        "nombre": "El principito",
        "descripcion": "Un cuento filosófico sobre un niño proveniente de un pequeño asteroide y sus encuentros en la Tierra.",
        "imagen": "el-principito.jpg",
        "genero": "Infantil"
    },
    {
        "nombre": "Matar a un ruiseñor",
        "descripcion": "Una novela clásica que aborda temas de racismo y justicia a través de los ojos de una niña.",
        "imagen": "matar-a-un-ruisenor.jpg",
        "genero": "Drama"
    },
    {
        "nombre": "El código Da Vinci",
        "descripcion": "Un thriller de misterio que sigue las investigaciones del simbologista Robert Langdon, escrito por Dan Brown.",
        "imagen": "el-codigo-da-vinci.jpg",
        "genero": "Thriller"
    },
    {
        "nombre": "El alquimista",
        "descripcion": "Una novela que narra el viaje espiritual de un joven pastor en busca de su tesoro personal, escrita por Paulo Coelho.",
        "imagen": "el-alquimista.jpg",
        "genero": "Novela de desarrollo personal"
    },
    {
        "nombre": "Los juegos del hambre",
        "descripcion": "Una trilogía distópica donde los jóvenes son obligados a participar en un juego mortal televisado.",
        "imagen": "los-juegos-del-hambre.jpg",
        "genero": "Aventura"
    },
    {
        "nombre": "El señor de los anillos",
        "descripcion": "Una épica historia de fantasía que sigue la lucha por destruir un anillo que otorga poder absoluto.",
        "imagen": "el-senor-de-los-anillos.jpg",
        "genero": "Fantasía"
    },
    {
        "nombre": "Crónica de una muerte anunciada",
        "descripcion": "Una novela que explora los eventos previos y la inevitabilidad de un asesinato en un pequeño pueblo.",
        "imagen": "cronica-de-una-muerte-anunciada.jpg",
        "genero": "Realismo mágico"
    },
    {
        "nombre": "Don Quijote de la Mancha",
        "descripcion": "Una obra maestra de la literatura española que narra las aventuras de un caballero enloquecido.",
        "imagen": "don-quijote-de-la-mancha.jpg",
        "genero": "Clásico"
    },
]

function CargarLibros(){
    libros.forEach((libro,id)=>AgregarLibro(libro,id))
}

function AgregarLibro(libro,id){
    const lista = document.getElementById('lista-libros')
    const _libro = CrearLibro(libro,id)

    lista.appendChild(_libro)
}

function CrearLibro(libro,id){
    const _libro = document.createElement("div")
    const titulo = document.createElement("h3")
    const imagen = document.createElement("img")
    const descripcion = document.createElement("p")
    const genero = document.createElement("span")

    titulo.innerText = libro.nombre
    descripcion.innerHTML = libro.descripcion
    genero.innerText = libro.genero
    imagen.src = `./img/libros/${libro.imagen}`
    imagen.alt = `portada-libro-${libro.imagen}`

    _libro.classList.add("libro")
    titulo.classList.add("libro__titulo")
    descripcion.classList.add("libro__descripcion")
    imagen.classList.add("libro__imagen")
    genero.classList.add("libro__genero")

    _libro.appendChild(imagen)
    _libro.appendChild(titulo)
    _libro.appendChild(genero)
    _libro.appendChild(descripcion)

    return _libro
}
document.addEventListener("DOMContentLoaded", LoadNews)

    const news = [
      {
        "title": "Hombre intenta enseñar a su perro a hablar y termina aprendiendo matemáticas",
        "image": "https://picsum.photos/200/300",
        "topic": "Entretenimiento"
      },
      {
        "title": "Nuevo estudio revela que las plantas pueden hablar y prefieren la música clásica",
        "topic": "Ciencia"
      },
      {
        "title": "Extraterrestres se comunican con la Tierra a través de memes de gatos",
        "topic": "Misterio"
      },
      {
        "title": "Encuentran ciudad perdida llena de unicornios y sirenas en el fondo del mar",
        "topic": "Viajes"
      },
      {
        "title": "Estudio científico demuestra que el helado es la clave para vivir hasta los 100 años",
        "topic": "Salud"
      },
      {
        "title": "Hombre se vuelve invisible pero sólo cuando nadie lo está mirando",
        "topic": "Entretenimiento"
      },
      {
        "title": "Gato es elegido presidente de una pequeña ciudad en Japón y promete más siestas para todos",
        "topic": "Política"
      },
      {
        "title": "Científicos descubren que los mosquitos sólo pican a las personas que no les caen bien",
        "topic": "Ciencia"
      },
      {
        "title": "Nuevo récord mundial: hombre construye la torre de Legos más alta del mundo",
        "topic": "Curiosidades"
      },
      {
        "title": "Increíble pero cierto: pollo cruza la carretera sin responder a la pregunta de por qué lo hizo",
        "topic": "Curiosidades"
      }
    ]

function LoadNews(){
    const newsContainer = document.getElementById("news")

    news.forEach((article,id) => AddNew(article,newsContainer,id))
}

function AddNew(article, container,id){
    const articleElement = document.createElement("article")

    const linkElement = document.createElement("a")
    linkElement.href = "#"
    if(id === 0) linkElement.href = "./noticia1.html"
    
    const titleElement = document.createElement("h4")
    titleElement.innerHTML = article.title
    
    const imageElement = document.createElement("img")
    imageElement.src = `./img/articles/${id}.jpg`

    const classificationElement = document.createElement("span")
    classificationElement.innerHTML = article.topic

    articleElement.appendChild(linkElement)

    linkElement.appendChild(imageElement)
    linkElement.appendChild(classificationElement)
    linkElement.appendChild(titleElement)
    
    container.appendChild(articleElement)
}
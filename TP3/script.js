document.addEventListener("DOMContentLoaded",main)

const questions = [
    {
        question:"¿A que te dedicas?",
        answer:"Actualmente estoy desempleado, me encuentro estudiando en la facultad y realzando proyectos de programación de forma autodidacta.",
    },
    {
        question:"¿Estudiaste o estas estudiando algo relacionado a tus intereses laborales?",
        answer:"Estoy estudiando programación de videojuegos en la UNAHUR.",
    },
    {
        question:"¿Como llegaste a la UNAHUR?",
        answer:"Recomendación de un amigo, luego investigue las carreras que tenia, me decidí por la Licenciatura en Informática, pero primero realizando la tecnicatura en programación de videojuegos.",
    },
    {
        question:"¿Por que elegiste esa carrera?",
        answer:"Porque yo quería continuar con la licenciatura en informática, y entre las 4 opciones que tenia, programación, redes, IA y vidojuegos, elegí la que mas más pareció interesante el programa, adicionalmente de que me hace mucho que quiero hacer un videojuego.",
    },
]

function main(){
    loadQuestions()
}

function loadQuestions(){
    questions.forEach(question=>addQuestion(question))
}

function addQuestion(question){
    const interviewElement= document.getElementById("interview")
    const interviewQuestionElement = document.createElement("div")
    const questionElement = document.createElement("h3")
    const answerElement = document.createElement("p")

    interviewQuestionElement.classList.add("question")
    questionElement.classList.add("question__title")
    answerElement.classList.add("question__answer")

    questionElement.innerHTML = question.question
    answerElement.innerHTML = question.answer

    interviewQuestionElement.appendChild(questionElement)
    interviewQuestionElement.appendChild(answerElement)
    interviewElement.appendChild(interviewQuestionElement)
}
document.addEventListener("DOMContentLoaded",CargarListenerEnviarFormulario)

const usuarios = [
    {
        nombre: "Mirtha",
        apellido: "Legrand",
        usuario: "mirtita",
        contrasenia: "123",
        rol: "paciente",
    },
    {
        nombre: "Gregory",
        apellido: "House",
        usuario: "house",
        contrasenia: "123",
        rol: "doctor",
    }
]

function CargarListenerEnviarFormulario(){
    const form = document.getElementById("login-form");
    form.addEventListener("submit",EnviarFormulario)
}

function EnviarFormulario(e){
    e.preventDefault()
    const username = e.target.usuario.value
    const password = e.target.contrasenia.value

    const usuario = _obtenerUsuario(username,password)

    console.log({usuario,u:{username,password}})

    if(!usuario){
        const invalido = document.getElementById("login-form__invalido")
        invalido.classList.add("visible")
        return 
    }

    const {nombre,apellido} = usuario

    /* 
        !!! NO HACER ESTO EN UNA PAGINA REAL !!!

        Lo que estoy haciendo a continuacion es solo por simplicidad
        ya que es un ejercicio academico, hacer esto es un expuesto
        enorme en la seguridad de la pagina, ya que estas enviando
        los datos del usuario en texto plano en la URL
    */
    const path = _esDoctor(usuario) ? 'doctor.html' : 'paciente.html'
    const baseUrl = _armarUrlBase(path)
    const url = `${baseUrl}${path}`
    const urlConParams = `${url}?usuario=${usuario.usuario}`
    window.location.assign(urlConParams)
}

function _obtenerUsuario(username,password){
    return usuarios.find(usuario=>usuario.usuario === username && usuario.contrasenia === password)
}

function _esDoctor(usuario){
    return usuario.rol === "doctor"
}

function _armarUrlBase(path){
    const {protocol,host, pathname} = window.location
    const finalPath = pathname.replace(/.*\.html/g,path)
    return `${protocol}//${host}${finalPath}`
}
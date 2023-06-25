document.addEventListener("DOMContentLoaded",CargarListeners)

const admins = [
    {
        nombre: "Rick",
        apellido: "Sanchez",
        email: "ricksanchez@rym.com",
        password: "picklerick"
      },
      {
        nombre: "Morty",
        apellido: "Smith",
        email: "mortysmith@rym.com",
        password: "ohgeez"
      },
      {
        nombre: "Jerry",
        apellido: "Smith",
        email: "jerrysmith@rym.com",
        password: "hungryforapples"
      },
      {
        nombre: "Beth",
        apellido: "Smith",
        email: "bethsmith@rym.com",
        password: "imnotaclone"
      },
      {
        nombre: "Summer",
        apellido: "Smith",
        email: "summersmith@rym.com",
        password: "keepsummersafe"
      }
]

function CargarListeners(){
    AgregarValidarEmail()
    AgregarEnviarFormulario()
}

function AgregarEnviarFormulario(){
    const form = document.getElementById("login-form");
    form.addEventListener("submit",EnviarFormulario)
}

function EnviarFormulario(e){
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.contrasenia.value

    if(!_esEmailValido(email)) return;

    const admin = _obtenerInformacionAdmin(email,password)

    if(!admin){
        const invalido = document.getElementById("login-form__invalido")
        invalido.classList.add("visible")
        return 
    }

    const {nombre,apellido} = admin

    /* 
        !!! NO HACER ESTO EN UNA PAGINA REAL !!!

        Lo que estoy haciendo a continuacion es solo por simplicidad
        ya que es un ejercicio academico, hacer esto es un expuesto
        enorme en la seguridad de la pagina, ya que estas enviando
        los datos del usuario en texto plano en la URL
    */
    const baseUrl = _armarUrlSinParams()
    const indexUrl = baseUrl.replace(/.*\.html/g,'index.html')
    const url = `${indexUrl}?nombre=${nombre}&apellido=${apellido}`
    console.log({url})
    window.location.assign(url)
}

function _obtenerInformacionAdmin(email,password){
    return admins.find(admin=>admin.email === email && admin.password === password)
}

function _armarUrlSinParams(){
    const {protocol,host,pathname} = window.location
    return `${protocol}//${host}/${pathname}`
}

function AgregarValidarEmail(){
    const email = document.getElementById("email");
    email.addEventListener("change",ValidarEmail)
}

function ValidarEmail(e){
    const mail = e.target
    const padre = e.target.parentElement

    if(_esEmailValido(mail.value)){
        return padre.classList.remove("invalido")
    }

    padre.classList.add("invalido")
}

function _esEmailValido(email){
    return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
}
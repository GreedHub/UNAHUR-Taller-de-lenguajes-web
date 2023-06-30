document.addEventListener("DOMContentLoaded",AgregarSaludo)

function AgregarSaludo(){
    const saludoUsuario = document.getElementById('saludo__nombre')

    const usuario = _obtenerUsuario()

    if(!usuario){
        const saludo = document.getElementById('saludo')
        saludo.classList.add('hidden')
    }

    saludoUsuario.innerHTML = usuario
}

function _obtenerUsuario(){
    const params = new URLSearchParams(window.location.search);
    return params.get("usuario");
}

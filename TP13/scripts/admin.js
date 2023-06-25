document.addEventListener("DOMContentLoaded",CargarInfoAdmin)

function CargarInfoAdmin(){
    const adminPanel = document.getElementById("admin")
    const adminNombre = document.getElementById("admin__nombre")

    const {nombre,apellido} = _obtenerInfoAdmin()

    if(!nombre || !apellido) return
    console.log({nombre,apellido})

    adminPanel.classList.add("visible")

    console.log({adminNombre,adminPanel})


    adminNombre.innerHTML = `${nombre} ${apellido}`
}

function _obtenerInfoAdmin(){
    const params = new URLSearchParams(window.location.search);

    const nombre =  params.get("nombre");
    const apellido =  params.get("apellido");

    return {
        nombre,
        apellido,
    }
}
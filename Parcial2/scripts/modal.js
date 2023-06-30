document.addEventListener("DOMContentLoaded",AgregarListenersModal)

function AgregarListenersModal(){
    _agregarListenerCierre()
}

function _agregarListenerCierre(){
    modals = document.getElementsByClassName('modal')
    if(!modals) return;
    for(let modal of modals){
        modal.addEventListener(
            'click',
            function(e){
                if(e.target !== this) return
                modal.classList.remove('abierto')
            }
        )
    }
}

function AbrirModal(e,idModal){
    e.preventDefault()

    const modal = document.getElementById(idModal)
    
    if(!modal) return

    modal.classList.add("abierto")
}
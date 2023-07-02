document.addEventListener("DOMContentLoaded", AgregarListenersModal);

function AgregarListenersModal() {
  _agregarListenerCierre();
}

function _agregarListenerCierre() {
  modals = document.getElementsByClassName("modal");
  if (!modals) return;
  for (let modal of modals) {
    modal.classList.add("cerrado");
    modal.addEventListener("click", function (e) {
      if (e.target !== this) return;
      modal.classList.remove("abierto");
      modal.classList.add("cerrado");
    });
  }
}

function AbrirModal(e, idModal) {
  e.preventDefault();

  const modal = document.getElementById(idModal);

  if (!modal) return;

  modal.classList.remove("cerrado");
  modal.classList.add("abierto");
}

function CerrarModal(idModal) {
  const elementoForm = document.getElementById("turno-modal");
  elementoForm.classList.remove("abierto");
  elementoForm.classList.add("cerrado");
}

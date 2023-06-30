document.addEventListener("DOMContentLoaded", InstanciarPaciente);

const usuario = {
  turnos: [
    {
      fecha: "26/06/2023",
      hora: "09:00",
      especialidad: "Infectología",
      medico: "Gregory House",
      observaciones: "Consulta de seguimiento",
    },
    {
      fecha: "28/06/2023",
      hora: "14:15",
      especialidad: "Neurología",
      medico: "Eric Foreman",
      observaciones: "Evaluación de síntomas",
    },
    {
      fecha: "29/06/2023",
      hora: "10:45",
      especialidad: "Cirugía",
      medico: "Robert Chase",
      observaciones: "Consulta inicial",
    },
    {
      fecha: "30/06/2023",
      hora: "16:00",
      especialidad: "Oncología",
      medico: "James Willson",
      observaciones: "Terapia de seguimiento",
    },
    {
      fecha: "01/07/2023",
      hora: "13:30",
      especialidad: "Traumatología",
      medico: "Allison Cameron",
      observaciones: "Consulta por lesión",
    },
  ],
};

function InstanciarPaciente() {
    _actualizarTurnos();

}

function _actualizarTurnos() {
  const elementoTurnos = document.getElementById("turnos__contenido");

  elementoTurnos.innerHTML = "";

  usuario.turnos.forEach((turno) => _agregarTurno(elementoTurnos, turno));
}

function _agregarTurno(elementoTurnos, turno) {
  const elementoTurno = _crearTurno(turno);
  elementoTurnos.appendChild(elementoTurno);
}

function _crearTurno({ fecha, hora, especialidad, medico, observaciones }) {
  const turno = document.createElement("tr");

  const elementoFecha = document.createElement("td");
  elementoFecha.innerHTML = fecha;

  const elementoHora = document.createElement("td");
  elementoHora.innerHTML = hora;

  const elementoEspecialidad = document.createElement("td");
  elementoEspecialidad.innerHTML = especialidad;

  const elementoMedico = document.createElement("td");
  elementoMedico.innerHTML = medico;

  const elementoObservaciones = document.createElement("td");
  elementoObservaciones.innerHTML = observaciones;

  turno.appendChild(elementoFecha);
  turno.appendChild(elementoHora);
  turno.appendChild(elementoEspecialidad);
  turno.appendChild(elementoMedico);
  turno.appendChild(elementoObservaciones);

  return turno;
}

function AlSolicitarTurno(e) {
  e.preventDefault();

  const fecha = e.target.fecha.value;
  const hora = e.target.hora.value;
  const especialidad = e.target.especialidad.value;
  const medico = e.target.medico.value;
  const observaciones = e.target.observaciones.value;

  /* TODO: validar inputs */

  const turno = { fecha, hora, especialidad, medico, observaciones };

  const elementoTurnos = document.getElementById("turnos__contenido");

  _agregarTurno(elementoTurnos, turno);

  _actualizarTurnos();
}

function AlCancelarTurno(id) {
  usuario.turnos = usuario.turnos.filter((_, _id) => _id !== id);
}

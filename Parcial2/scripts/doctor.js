document.addEventListener("DOMContentLoaded", _cargarTurnos);

const turnos = {
  "26/06/2023": [
    {
      hora: "09:00",
      paciente: "Mirtha Legrand",
      observaciones: "Consulta de seguimiento",
    },
    {
      hora: "10:30",
      paciente: "John Smith",
      observaciones: "Control de tratamiento",
    },
  ],
  "27/06/2023": [
    {
      hora: "14:00",
      paciente: "Sarah Johnson",
      observaciones: "Evaluación de síntomas",
    },
    {
      hora: "16:00",
      paciente: "Emma Davis",
      observaciones: "Revisión de análisis",
    },
  ],
  "28/06/2023": [
    {
      hora: "11:15",
      paciente: "Michael Brown",
      observaciones: "Consulta inicial",
    },
    {
      hora: "12:30",
      paciente: "Sophia Martinez",
      observaciones: "Control de progreso",
    },
  ],
  "29/06/2023": [
    {
      hora: "10:00",
      paciente: "Noah Taylor",
      observaciones: "Revisión de medicación",
    },
    {
      hora: "13:15",
      paciente: "Isabella Thomas",
      observaciones: "Control de síntomas",
    },
  ],
  "30/06/2023": [
    {
      hora: "14:00",
      paciente: "Oliver Hernandez",
      observaciones: "Consulta de seguimiento",
    },
    {
      hora: "16:30",
      paciente: "Emma Davis",
      observaciones: "Revisión de análisis",
    },
  ],
  "01/07/2023": [
    {
      hora: "11:00",
      paciente: "Sarah Johnson",
      observaciones: "Evaluación de síntomas",
    },
    {
      hora: "12:30",
      paciente: "Sophia Martinez",
      observaciones: "Control de progreso",
    },
  ],
  "02/07/2023": [
    {
      hora: "09:30",
      paciente: "Noah Taylor",
      observaciones: "Revisión de medicación",
    },
    {
      hora: "14:45",
      paciente: "Isabella Thomas",
      observaciones: "Control de síntomas",
    },
  ],
  "03/07/2023": [
    {
      hora: "16:00",
      paciente: "Oliver Hernandez",
      observaciones: "Consulta de seguimiento",
    },
    {
      hora: "17:30",
      paciente: "Emma Davis",
      observaciones: "Revisión de análisis",
    },
  ],
  "04/07/2023": [
    {
      hora: "12:15",
      paciente: "Sarah Johnson",
      observaciones: "Evaluación de síntomas",
    },
  ],
};

function _cargarTurnos() {
  const root = document.getElementById("turnos");
  Object.keys(turnos).forEach((dia) => _crearDía(dia, turnos[dia], root));
}

function _crearDía(dia, turnos, root) {
  const elementoDia = document.createElement("div");
  elementoDia.classList.add("dia");

  const elementoTitulo = document.createElement("h3");
  elementoTitulo.classList.add("dia__titulo");
  elementoTitulo.innerHTML = dia;

  const elementoContenido = document.createElement("div");
  elementoContenido.classList.add("dia__contenido");

  turnos.forEach((turno) => _crearTurno(turno, elementoContenido));

  elementoDia.appendChild(elementoTitulo);
  elementoDia.appendChild(elementoContenido);

  root.appendChild(elementoDia);
}

function _crearTurno(turno, root) {
  const elementoTurno = document.createElement("div");
  elementoTurno.classList.add("turno");

  const elementoTitulo = document.createElement("h4");
  elementoTitulo.classList.add("turno__titulo");
  elementoTitulo.innerHTML = `${turno.hora} hs.`;

  const elementoContenido = document.createElement("div");
  elementoContenido.classList.add("turno__contenido");
  elementoContenido.innerHTML =
    `Paciente: ${turno.paciente} <br>` + 
    `Observaciones: ${turno.observaciones}`;

  elementoTurno.appendChild(elementoTitulo);
  elementoTurno.appendChild(elementoContenido);

  root.appendChild(elementoTurno);
}

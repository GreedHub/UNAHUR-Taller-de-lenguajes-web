document.addEventListener("DOMContentLoaded", InstanciarPaciente);

const usuario = {
  turnos: [
    {
      fecha: "26/06/2023",
      hora: "09:00",
      especialidad: "Infectología",
      profesional: "Gregory House",
      observaciones: "Consulta de seguimiento",
    },
    {
      fecha: "28/06/2023",
      hora: "14:00",
      especialidad: "Neurología",
      profesional: "Eric Foreman",
      observaciones: "Evaluación de síntomas",
    },
    {
      fecha: "29/06/2023",
      hora: "10:00",
      especialidad: "Cirugía",
      profesional: "Robert Chase",
      observaciones: "Consulta inicial",
    },
    {
      fecha: "30/06/2023",
      hora: "16:00",
      especialidad: "Oncología",
      profesional: "James Willson",
      observaciones: "Terapia de seguimiento",
    },
    {
      fecha: "01/07/2023",
      hora: "13:00",
      especialidad: "Traumatología",
      profesional: "Allison Cameron",
      observaciones: "Consulta por lesión",
    },
  ],
};

const especialidades = [
  {
    nombre: "Infectología",
    profesionales: ["Gregory House"],
  },
  {
    nombre: "Neurología",
    profesionales: ["Eric Foreman"],
  },
  {
    nombre: "Cirugía",
    profesionales: ["Robert Chase"],
  },
  {
    nombre: "Oncología",
    profesionales: ["James Willson"],
  },
  {
    nombre: "Traumatología",
    profesionales: ["Allison Cameron"],
  },
];

function InstanciarPaciente() {
  _actualizarTurnos();
}

function _actualizarTurnos() {
  const elementoTurnos = document.getElementById("turnos__contenido");

  elementoTurnos.innerHTML = "";

  usuario.turnos.forEach((turno, id) =>
    _agregarTurno(elementoTurnos, turno, id)
  );
}

function _agregarTurno(elementoTurnos, turno, id) {
  const elementoTurno = _crearTurno(turno, id);
  elementoTurnos.appendChild(elementoTurno);
}

function _crearTurno({ fecha, hora, especialidad, profesional, observaciones }, id) {
  const turno = document.createElement("tr");

  const elementoFecha = document.createElement("td");
  elementoFecha.innerHTML = fecha;

  const elementoHora = document.createElement("td");
  elementoHora.innerHTML = hora;

  const elementoEspecialidad = document.createElement("td");
  elementoEspecialidad.innerHTML = especialidad;

  const elementoProfesional = document.createElement("td");
  elementoProfesional.innerHTML = profesional;

  const elementoObservaciones = document.createElement("td");
  elementoObservaciones.innerHTML = observaciones;

  const cancelarTurno = document.createElement("button");
  cancelarTurno.innerHTML = "Cancelar";
  cancelarTurno.addEventListener("click", () => AlCancelarTurno(id));

  const elementoAcciones = document.createElement("td");
  elementoAcciones.appendChild(cancelarTurno);

  turno.appendChild(elementoFecha);
  turno.appendChild(elementoHora);
  turno.appendChild(elementoEspecialidad);
  turno.appendChild(elementoProfesional);
  turno.appendChild(elementoObservaciones);
  turno.appendChild(elementoAcciones);

  return turno;
}

function AlSolicitarTurno(e) {
  e.preventDefault();

  const fecha = e.target.fecha.value.split('-').reverse().join('/');
  const hora = e.target.hora.value;
  const especialidad = e.target.especialidad.value;
  const profesional = e.target.profesional.value;
  const observaciones = e.target.observaciones.value;

  const turno = { fecha, hora, especialidad, profesional, observaciones };

  usuario.turnos.push(turno)

  CerrarModal('turno-modal')

  e.target.fecha.value = ''
  e.target.observaciones.value = ''

  _actualizarTurnos();
}

function _esEspecialidadValida(especialidad) {
  return especialidades.some(
    (_especialidad) => _especialidad.nombre === especialidad
  );
}

function _esProfesionalValido(especialidad, profesional) {
  return especialidades.some(
    (_especialidad) =>
      _especialidad.nombre === especialidad &&
      _especialidad.profesionales.includes(profesional)
  );
}

function AlCancelarTurno(id) {
  usuario.turnos = usuario.turnos.filter((_, _id) => _id !== id);
  _actualizarTurnos();
}

function AlSeleccionarEspecialidad(e) {

  const espSeleccionada = e.target.value

  const especialidad = especialidades.find(e=>e.nombre === espSeleccionada)

  _actualizarProfesionales(especialidad.profesionales)
}

function _actualizarProfesionales(profesionales){
  const elementoProfesionales = document.getElementById('profesional')
  elementoProfesionales.innerHTML = ''
  
  profesionales.forEach(p=>_agregarProfesional(p,elementoProfesionales))
}

function _agregarProfesional(profesional,elementoProfesionales){
  const elementoProfesional = _crearProfesional(profesional)
  console.log({elementoProfesional})
  elementoProfesionales.appendChild(elementoProfesional)
}

function _crearProfesional(profesional){
  const elementoProfesional = document.createElement('option')
  elementoProfesional.setAttribute('value',profesional)
  elementoProfesional.innerHTML = profesional
  return elementoProfesional
}
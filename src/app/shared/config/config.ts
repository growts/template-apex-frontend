import {HttpClient} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

export const version = 'v-1.0.0';
export const protocol = 'https://';
export const server = 'eschool-backend.ekeepoit.com';
export const port = '';

export const persona = {
  path: 'persona',
  getMayores: '/getMayoresPorSede/',
  getAlumnos: '/getAlumnos/',
  getResponsables: '/getResponsables/',
  getPersonasPorCurso: '/getPersonasPorCurso/',
  getPersonas: '/getPersonas/',
  migratePersona: '/migratePersona',
  getPcrByPersonaAndSede: '/getPcrByPersonaAndSede/'
};

export const tipoMovimientoCtaCte = {
  credito: 'C',
  debito: 'D'
}

export const asistencia = {
  path: 'asistencia',
  getAsistenciaPorCurso: '/getAsistenciaPorCurso/',
  getAsistenciaPorAlumno: '/getAsistenciaPorAlumno/',
  save: '/saveInasistenciaPorCurso'
}
export const login = 'login';
export const auth = '/auth';
export const resportes = {
  comprobante: '/pdf/boleta',
  pagos: '/pdf/pagos',
  deudas: '/pdf/deudas',
}
export const curso = {
  path: 'curso',
  asignarPersonas: '/asignarPersonas',
  asignarCurso: '/asignarCurso',
  cursonoasignado: '/noasignado/',
  deleteAsignacion: '/deleteAsignacion',
  preciosCursoPorCarrera: '/preciosCursoPorCarrera/',
  guardarPrecioCurso: '/guardarPrecioCurso',
  getCursosPorPersonaPorSede: '/getCursosPorPersonaPorSede/',
  getAsistenciaPorCursoPorSede: '/getAsistenciaPorCursoPorSede/',
  desafectarPersonaCurso: '/desafectarPersonaCurso'
};
export const concepto = {
  path: 'concepto',
  conceptosPorTipo: '/conceptosPorTipo/'
};
export const usuario = {
  path: 'usuario',
  validaUserName: '/validateUsername/'
};
export const sede = 'sede';
export const carrera = 'carrera';
export const division = {
  path: '/division',
  disponiblesPorNivel: '/disponiblesPorNivel/'
};
export const nivel = {
  path: '/nivel',
  disponiblePorDivision: '/disponiblesPorDivision/'
};
export const preguntaTipo = '/preguntaTipo/';

export const obligaciones = {
  path: 'obligaciones',
  getObligacionesPorPersonaPorSede: '/getObligacionesPorPersonaPorSede/',
  getObligacionesPorPersonaPorSedePorCurso: '/getObligacionesPorPersonaPorSedePorCurso/',
  getMovimientosPorObligacion: '/getMovimientosPorObligacion/',
  saveManual: '/saveManual/',
  saveAjusteCuota: '/saveAjusteCuota/'
};
export const promocion = {
  path: '/promocion',
  getPromocionesActivasPorPersonaPorSede: '/getPromocionesActivasPorPersonaPorSede/',
  savePromocionPorPersonaPorSede: '/savePromocionPorPersonaPorSede',
  finalizarPromocionPorPersonaPorSede: '/finalizarPromocionPorPersonaPorSede'
};
export const pago = {
  path: '/pago',
  acreditar: '/acreditar',
  getAllBySede: '/getAllBySede/',
  cancelar: '/cancelar/',
  getAllBySedeAndFechas: '/getAllBySedeAndFechas',
  setFechaPago: '/setFechaPago'
};

export const examen = {
  path: '/examen',
  saveExamenPorCurso: '/saveExamenPorCurso',
  getExamenPorCurso: '/getExamenesPorCurso/'
};

export const examenPorCurso = {
  path: '/examenPorCurso',
  setFechaExamen: '/setFechaExamen'
}

export const config = {
  path: 'config',
  ajusteMasivo: '/ajusteMasivo'
};

export const mensajesCurso = {
  // Message to show when array is presented
  // but contains no values
  emptyMessage: 'NO HAY CURSOS DISPONIBLES PARA ASIGNAR',
  // Footer total message
  totalMessage: 'total',
  // Footer selected message
  selectedMessage: 'seleccionado'
};
export const mensajesAlumnosAsignados = {
  // Message to show when array is presented
  // but contains no values
  emptyMessage: 'NO HAY ALUMNOS ASIGANDOS AL CURSO',
  // Footer total message
  totalMessage: 'total',
  // Footer selected message
  selectedMessage: 'seleccionado'
};
export const mensajesPrecio = {
  // Message to show when array is presented
  // but contains no values
  emptyMessage: 'NO HAY PRECIOS CARGADOS PARA EL CURSO SELECCIONADO',
  // Footer total message
  totalMessage: 'total',
  // Footer selected message
  selectedMessage: 'seleccionado'
};
export const mensajesEmision = {
  // Message to show when array is presented
  // but contains no values
  emptyMessage: 'NO HAY CUOTAS ADEUDADAS PARA EL ALUMNO SELECCIONADO',
  // Footer total message
  totalMessage: 'total',
  // Footer selected message
  selectedMessage: 'seleccionados'
};
export const meses = [{id: 1, nombre: 'enero'},
  {id: 2, nombre: 'febrero'},
  {id: 3, nombre: 'marzo'},
  {id: 4, nombre: 'abril'},
  {id: 5, nombre: 'mayo'},
  {id: 6, nombre: 'junio'},
  {id: 7, nombre: 'julio'},
  {id: 8, nombre: 'agosto'},
  {id: 9, nombre: 'septiembre'},
  {id: 10, nombre: 'octubre'},
  {id: 11, nombre: 'noviembre'},
  {id: 12, nombre: 'diciembre'}];
export const catedras = [{id: 1, nombre: 'A'},
  {id: 2, nombre: 'B'},
  {id: 3, nombre: 'C'},
  {id: 4, nombre: 'D'}];

export const categoria = {
  alumno: 'ALUMNO',
  profesor: 'PROFESOR'
  , responsable: 'RESPONSABLE'
  , secretaria: 'SECRETARIA'
};

export const tipoConcepto = {
  precio: 'Precio',
  obligacion: 'Obligacion',
  movimiento: 'Movimiento'
};
export const generales = {
  path: '/parGenerales',
  byCodigo: '/byCodigo'
};








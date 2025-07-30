// Verificar funcionalidad 

function getAllHospitales() { return db.hospitales.find().toArray(); }
function buscarHospitalPorNombre(nombre) { return db.hospitales.find({ nombre }).toArray(); }
function buscarHospitalPorCiudad(ciudad) { return db.hospitales.find({ direccion: new RegExp(ciudad, "i") }).toArray(); }
function proyectarNombreDirector(){return db.hospitales.aggregate({$lookup:{from:"personal",localField:"director_id",foreignField:"id",as:"director_info"}},{$unwind:"$director_info"},{$match:{"director_info.tipo":"001"}},{$project:{_id:0,nombre_hospital:"$nombre",nombre_director:"$director_info.nombre"}}).toArray();}
function buscarHospitalConArea(area) { return db.hospitales.find({ areas: area }).toArray(); }
function hospitalesConMinAreas(num) { return db.hospitales.find({ ["areas."+(num-1)]: { $exists: true } }).toArray(); }
function contarHospitalesEnCiudad(ciudad) { return db.hospitales.countDocuments({ direccion: new RegExp(ciudad, "i") }); }
function actualizarDireccionHospital(nombre, nuevaDireccion) { return db.hospitales.updateOne({ nombre }, { $set:{direccion:nuevaDireccion} }); }
function agregarAreaAHospital(nombre, area) { return db.hospitales.updateOne({ nombre }, { $push:{areas:area} }); }
function hospitalesSinArea(area) { return db.hospitales.find({ areas: { $ne: area } }).toArray(); }
function buscarHospitalPorDirector(id) { return db.hospitales.find({ director_id:id }).toArray(); }
function quitarAreaAHospital(nombre, area) { return db.hospitales.updateOne({ nombre }, { $pull:{areas:area} }); }
function ordenarHospitalesPorNombre() { return db.hospitales.find().sort({ nombre:1 }).toArray(); }
function hospitalesConMasDeAreas(cantidad) { return db.hospitales.find({ $expr:{ $gt:[{$size:"$areas"}, (cantidad-1)] } }).toArray(); }
function reemplazarHospital(nombre, nuevoDoc) { return db.hospitales.replaceOne({ nombre }, nuevoDoc); }
function contarHospitales() { return db.hospitales.estimatedDocumentCount(); }
function buscarHospitalPorCaracterEnDireccion(car) { return db.hospitales.find({ direccion: new RegExp(car) }).toArray(); }
function hospitalesConMedicinaInterna() { return db.hospitales.find({ areas:"Medicina Interna" }).toArray(); }
function proyectarAreas() { return db.hospitales.find({}, { areas:1, _id:0 }).toArray(); }
function borrarHospital(nombre) { return db.hospitales.deleteOne({ nombre }); }

// ###############################################################################

function getAllPersonal() { return db.personal.find().toArray(); }
function buscarPersonalPorTipo(tipo) { return db.personal.find({ tipo }).toArray(); }
function proyectarNombreSalario() { return db.personal.find({}, { nombre:1, salario:1, _id:0 }).toArray(); }
function personalConSalarioMayorA(valor) { return db.personal.find({ salario: { $gt: valor } }).toArray(); }
function ordenarPersonalPorSalarioDesc() { return db.personal.find().sort({ salario:-1 }).toArray(); }
function contarPersonalPorTipo() { return db.personal.aggregate([{ $group:{_id:"$tipo", total:{$sum:1}} }]).toArray(); }
function personalConPacientesAsignados() { return db.personal.find({ pacientes_asignados: { $exists:true, $ne:[] } }).toArray(); }
function buscarPersonalPorEspecialidad(esp) { return db.personal.find({ especialidad:esp }).toArray(); }
function buscarPersonalPorEmailTermino(termino) { return db.personal.find({ email: new RegExp(termino+"$") }).toArray(); }
function actualizarTelefonoPersonal(nombre, nuevoTel) { return db.personal.updateOne({ nombre }, { $set:{telefono:nuevoTel} }); }
function aumentarSalarioTodos(porcentaje) { return db.personal.updateMany({}, { $mul:{salario:1+porcentaje} }); }
function asignarPacienteAMedico(id, paciente) { return db.personal.updateOne({ _id:id }, { $push:{pacientes_asignados:paciente} }); }
function quitarPacienteDeMedico(id, paciente) { return db.personal.updateOne({ _id:id }, { $pull:{pacientes_asignados:paciente} }); }
function personalConSalarioEntre(min, max) { return db.personal.find({ salario:{ $gte:min, $lte:max } }).toArray(); }
function contarDirectores() { return db.personal.countDocuments({ tipo:"001" }); }
function personalTelefonoEmpieza(valor) { return db.personal.find({ telefono: new RegExp("^"+valor) }).toArray(); }
function personalSinEspecialidad() { return db.personal.find({ especialidad: { $exists:false } }).toArray(); }
function proyectarNombresPersonal() { return db.personal.find({}, { nombre:1, _id:0 }).sort({ nombre:1 }).toArray(); }
function eliminarPersonalPorId(id) { return db.personal.deleteOne({ _id:id }); }
function top5Salarios() { return db.personal.find().sort({ salario:-1 }).limit(5).toArray(); }


function getAllPacientes() { return db.pacientes.find().toArray(); }
function buscarPacientePorNombre(nombre) { return db.pacientes.find({ nombre }).toArray(); }
function proyectarNombreHistoria() { return db.pacientes.find({}, { nombre:1, historia_clinica:1, _id:0 }).toArray(); }
function pacientesConSeguro(seguro) { return db.pacientes.find({ seguro:seguro }).toArray(); }
function contarPacientes() { return db.pacientes.estimatedDocumentCount(); }
function pacientesHistoriaMayor(valor) { return db.pacientes.find({ historia_clinica:{ $gt:valor } }).toArray(); }
function ordenarPacientesPorNombre() { return db.pacientes.find().sort({ nombre:1 }).toArray(); }
function pacientesPorCiudad(ciudad) { return db.pacientes.find({ direccion:new RegExp(ciudad,"i") }).toArray(); }
function pacientesMultiplesSeguros() { return db.pacientes.find({ "seguro.1":{ $exists:true } }).toArray(); }
function actualizarDireccionPaciente(id, dir) { return db.pacientes.updateOne({ _id:id }, { $set:{direccion:dir} }); }
function agregarSeguroPaciente(id, seguro) { return db.pacientes.updateOne({ _id:id }, { $push:{seguro:seguro} }); }
function quitarSeguroPaciente(id, seguro) { return db.pacientes.updateOne({ _id:id }, { $pull:{seguro:seguro} }); }
function pacientesEmailCom() { return db.pacientes.find({ email:/\.com$/ }).toArray(); }
function contarPacientesTelefonoPrefijo(prefijo) { return db.pacientes.countDocuments({ telefono:new RegExp("^"+prefijo) }); }
function buscarPacientePorId(id) { return db.pacientes.find({ _id:id }).toArray(); }
function proyectarEmailsPacientes() { return db.pacientes.find({}, { email:1, _id:0 }).toArray(); }
function eliminarPacientePorId(id) { return db.pacientes.deleteOne({ _id:id }); }
function pacientesHistoriaEntre(min,max) { return db.pacientes.find({ historia_clinica:{ $gte:min, $lte:max } }).toArray(); }
function pacientesSeguroFarmasanitas() { return db.pacientes.find({ seguro:"Farmasanitas" }).toArray(); }
function pacientesAleatorios(cant) { return db.pacientes.aggregate([{ $sample:{ size:cant } }]).toArray(); }


function getAllMedicamentos() { return db.medicamentos.find().toArray(); }
function buscarMedicamentoPorNombre(nombre) { return db.medicamentos.find({ nombre }).toArray(); }
function proyectarNombreDisponibilidad() { return db.medicamentos.find({}, { nombre:1, disponibilidad:1, _id:0 }).toArray(); }
function medicamentosDisponiblesMasDe(valor) { return db.medicamentos.find({ disponibilidad:{ $gt:valor } }).toArray(); }
function ordenarMedicamentosPorDisponibilidad() { return db.medicamentos.find().sort({ disponibilidad:-1 }).toArray(); }
function contarMedicamentosFabricante(fab) { return db.medicamentos.countDocuments({ fabricante:fab }); }
function medicamentosPorTipo(tipo) { return db.medicamentos.find({ tipo:new RegExp(tipo,"i") }).toArray(); }
function actualizarDisponibilidadMedicamento(nombre, cant) { return db.medicamentos.updateOne({ nombre }, { $set:{disponibilidad:cant} }); }
function incrementarDisponibilidadTodos(valor) { return db.medicamentos.updateMany({}, { $inc:{disponibilidad:valor} }); }
function eliminarMedicamento(nombre) { return db.medicamentos.deleteOne({ nombre }); }


function getAllTratamientos() { return db.tratamientos.find().toArray(); }
function buscarTratamientoPorNombre(nombre) { return db.tratamientos.find({ nombre }).toArray(); }
function proyectarNombreCostoTratamientos() { return db.tratamientos.find({}, { nombre:1, costo:1, _id:0 }).toArray(); }
function tratamientosCostoMayorA(valor) { return db.tratamientos.find({ costo:{ $gt:valor } }).toArray(); }
function ordenarTratamientosPorCosto() { return db.tratamientos.find().sort({ costo:-1 }).toArray(); }
function contarTratamientosPorArea() { return db.tratamientos.aggregate([{ $group:{_id:"$area", total:{$sum:1}} }]).toArray(); }
function tratamientosDescripcionContiene(texto) { return db.tratamientos.find({ descripcion:new RegExp(texto,"i") }).toArray(); }
function actualizarCostoTratamiento(nombre, costo) { return db.tratamientos.updateOne({ nombre }, { $set:{costo:costo} }); }
function incrementarCostoTodos(porc) { return db.tratamientos.updateMany({}, { $mul:{costo:1+porc} }); }
function eliminarTratamiento(nombre) { return db.tratamientos.deleteOne({ nombre }); }


function getAllHistoriales() { return db.historiales_clinicos.find().toArray(); }
function buscarHistorialPorPaciente(id) { return db.historiales_clinicos.find({ paciente_id:id }).toArray(); }
function proyectarTratamientosHistorial() { return db.historiales_clinicos.find({}, { tratamientos:1, _id:0 }).toArray(); }
function historialesConMasDeUnaCita() { return db.historiales_clinicos.find({ "citas_medicas.1": { $exists:true } }).toArray(); }
function agregarCitaAHistorial(id, cita) { return db.historiales_clinicos.updateOne({ paciente_id:id }, { $push:{citas_medicas:cita} }); }
function agregarTratamientoAHistorial(id, nombre) { return db.historiales_clinicos.updateOne({ paciente_id:id }, { $push:{tratamientos:{nombre:nombre, fecha:new Date()}} }); }
function contarHistorialesConResultado(res) { return db.historiales_clinicos.countDocuments({ resultados:res }); }
function historialesSinResultados() { return db.historiales_clinicos.find({ resultados:{ $size:0 } }).toArray(); }
function quitarResultadoDeHistorial(id,res) { return db.historiales_clinicos.updateOne({ paciente_id:id }, { $pull:{resultados:res} }); }
function historialesOrdenadosPorFecha() { return db.historiales_clinicos.find().sort({ "tratamientos.fecha":-1 }).toArray(); }


function getAllVisitas() { return db.visitas_medicas.find().toArray(); }
function buscarVisitaPorCita(idCita) { return db.visitas_medicas.find({ id_cita_medica:idCita }).toArray(); }
function buscarVisitasPorPaciente(id) { return db.visitas_medicas.find({ paciente_id:id }).toArray(); }
function buscarVisitasPorMedico(id) { return db.visitas_medicas.find({ medico_id:id }).toArray(); }
function contarVisitasDePaciente(id) { return db.visitas_medicas.countDocuments({ paciente_id:id }); }
function buscarVisitasPorFecha(fechaISO) { return db.visitas_medicas.find({ fecha:new Date(fechaISO) }).toArray(); }
function proyectarDiagnosticosVisitas() { return db.visitas_medicas.find({}, { diagnostico:1, _id:0 }).toArray(); }
function eliminarVisitaPorCita(idCita) { return db.visitas_medicas.deleteOne({ id_cita_medica:idCita }); }
function buscarVisitasPorDiagnostico(texto) { return db.visitas_medicas.find({ diagnostico:new RegExp(texto,"i") }).toArray(); }
function obtenerVisitasRecientes(n) { return db.visitas_medicas.find().sort({ fecha:-1 }).limit(n).toArray(); }
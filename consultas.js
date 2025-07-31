// Estado actual de hospitales
db.hospitales.countDocuments();
db.hospitales.find({}, { nombre: 1, ciudad: 1 });
db.hospitales.find().sort({ capacidadCamas: -1 });
db.hospitales.find({ capacidadCamas: { $gt: 100 } });
db.hospitales.find({ ciudad: "Bogotá" });

db.personal.aggregate([
  { $match: { tipoPersonal: "002" } },
  { $group: { _id: "$hospitalAsignado", cantidadMedicos: { $sum: 1 } } }
]);

db.personal.aggregate([
  { $match: { tipoPersonal: "003" } },
  { $group: { _id: "$hospitalAsignado", cantidadEnfermeros: { $sum: 1 } } }
]);

db.hospitales.find({ "areasEspeciales.0": { $exists: true } });

db.hospitales.aggregate([
  {
    $project: {
      nombre: 1,
      cantidadAreas: { $size: "$areasEspeciales" }
    }
  }
]);

db.hospitales.find({ areasEspeciales: /intensivo/i });

// Inventarios de medicamentos
db.medicamentos.find();
db.medicamentos.find({ disponibilidad: { $lt: 10 } });

db.medicamentos.aggregate([
  { $group: { _id: "$tipo", total: { $sum: 1 } } }
]);

db.medicamentos.aggregate([
  { $group: { _id: "$tipo", totalDisponible: { $sum: "$disponibilidad" } } }
]);

db.medicamentos.find({ nombre: { $regex: /para/i } });

db.medicamentos.distinct("fabricante");

db.medicamentos.aggregate([
  { $group: { _id: "$hospitalId", totalDisponible: { $sum: "$disponibilidad" } } }
]);

// Historial clínico por diagnóstico y tratamientos
db.historialMedico.find({ diagnostico: /asma/i });

db.historialMedico.aggregate([
  { $group: { _id: "$numeroHC", cantidad: { $sum: 1 } } },
  { $match: { cantidad: { $gt: 3 } } }
]);

db.visitasMedicas.aggregate([
  { $unwind: "$tratamientosAplicados" },
  { $group: { _id: "$tratamientosAplicados", veces: { $sum: 1 } } },
  { $sort: { veces: -1 } }
]);

db.historialMedico.find({ numeroHC: "HC00123" });

// Actividades del personal y roles
db.personal.find({}, { nombre: 1, tipoPersonal: 1 });

db.personal.aggregate([
  { $group: { _id: "$tipoPersonal", cantidad: { $sum: 1 } } }
]);

db.personal.find({ tipoPersonal: "002", salario: { $gt: 5000000 } });

db.personal.find({ tipoPersonal: "005" }).sort({ hospitalAsignado: 1 });

// 26. Obtener todos los pacientes atendidos por un médico específico (por nombre)
db.VisitasMedicas.aggregate([
  {
    $lookup: {
      from: "Personal",
      localField: "medicoAsignado",
      foreignField: "nombre",
      as: "infoMedico"
    }
  },
  { $match: { "infoMedico.nombre": "Dr. Juan Pérez" } },
  {
    $project: {
      pacienteAtendido: 1,
      fecha: 1,
      hora: 1
    }
  }
]);

// 27. Listar tratamientos que han sido aplicados en más de una visita médica
db.VisitasMedicas.aggregate([
  { $unwind: "$tratamientosAplicados" },
  {
    $group: {
      _id: "$tratamientosAplicados",
      vecesAplicado: { $sum: 1 }
    }
  },
  { $match: { vecesAplicado: { $gt: 1 } } }
]);

// 28. Buscar pacientes cuyo nombre empiece con "Mar" (uso de $regex)
db.Pacientes.find({ nombre: { $regex: /^Mar/i } });

// 29. Ver disponibilidad total de medicamentos por fabricante
db.Medicamentos.aggregate([
  {
    $group: {
      _id: "$fabricante",
      totalDisponibilidad: { $sum: "$disponibilidad" }
    }
  }
]);

// 30. Encontrar pacientes con más de 3 entradas en su historial médico
db.HistorialMedico.aggregate([
  { $group: { _id: "$numeroHC", entradas: { $sum: 1 } } },
  { $match: { entradas: { $gt: 3 } } }
]);

// 31. Listar visitas médicas por área de tratamiento
db.VisitasMedicas.aggregate([
  { $unwind: "$tratamientosAplicados" },
  {
    $lookup: {
      from: "Tratamiento",
      localField: "tratamientosAplicados",
      foreignField: "_id",
      as: "detalleTratamiento"
    }
  },
  { $unwind: "$detalleTratamiento" },
  {
    $group: {
      _id: "$detalleTratamiento.areaRelacionada",
      visitas: { $sum: 1 }
    }
  }
]);

// 32. Mostrar pacientes que no tienen historial médico
db.Pacientes.aggregate([
  {
    $lookup: {
      from: "HistorialMedico",
      localField: "numeroHC",
      foreignField: "numeroHC",
      as: "historial"
    }
  },
  { $match: { historial: { $size: 0 } } }
]);

// 33. Mostrar tratamientos más utilizados
db.VisitasMedicas.aggregate([
  { $unwind: "$tratamientosAplicados" },
  {
    $group: {
      _id: "$tratamientosAplicados",
      total: { $sum: 1 }
    }
  },
  { $sort: { total: -1 } }
]);

// 34. Promedio de visitas médicas por paciente
db.VisitasMedicas.aggregate([
  {
    $group: {
      _id: "$pacienteAtendido",
      visitas: { $sum: 1 }
    }
  },
  {
    $group: {
      _id: null,
      promedioVisitas: { $avg: "$visitas" }
    }
  }
]);

// 35. Ver cantidad de seguros por compañía
db.Seguros.aggregate([
  {
    $group: {
      _id: "$nombreCompañía",
      cantidad: { $sum: 1 }
    }
  }
]);

// 36. Mostrar médicos especialistas en cardiología
db.Personal.find({ especialidad: "Cardiología", tipoPersonal: "002" });

// 37. Total de personal por tipo
db.Personal.aggregate([
  {
    $group: {
      _id: "$tipoPersonal",
      cantidad: { $sum: 1 }
    }
  }
]);

// 38. Diagnósticos más comunes
db.HistorialMedico.aggregate([
  {
    $group: {
      _id: "$diagnostico",
      cantidad: { $sum: 1 }
    }
  },
  { $sort: { cantidad: -1 } }
]);

// 39. Mostrar personal administrativo por hospital
db.Personal.find({ tipoPersonal: "004" });

// 40. Listar médicos y su hospital
db.Personal.aggregate([
  { $match: { tipoPersonal: "002" } },
  {
    $lookup: {
      from: "Hospital",
      localField: "hospitalAsignado",
      foreignField: "_id",
      as: "hospital"
    }
  },
  { $project: { nombre: 1, especialidad: 1, hospital: "$hospital.areasEspecializadas" } }
]);

// 41. Médicos con salario mayor a 5 millones
db.Personal.find({ tipoPersonal: "002", salario: { $gt: 5000000 } });

// 42. Medicamentos con disponibilidad menor a 10
db.Medicamentos.find({ disponibilidad: { $lt: 10 } });

// 43. Diagnósticos por mes
db.HistorialMedico.aggregate([
  {
    $project: {
      mes: { $month: "$fecha" },
      diagnostico: 1
    }
  },
  {
    $group: {
      _id: "$mes",
      cantidad: { $sum: 1 }
    }
  }
]);

// 44. Pacientes con seguro de tipo “premium”
db.Seguros.aggregate([
  { $match: { tipoCobertura: "Premium" } },
  {
    $lookup: {
      from: "Pacientes",
      localField: "numeroHC",
      foreignField: "numeroHC",
      as: "datosPaciente"
    }
  }
]);

// 45. Personal de mantenimiento asignado a hospitales
db.Personal.find({ tipoPersonal: "005" });

// 46. Total de pacientes atendidos por médico
db.VisitasMedicas.aggregate([
  {
    $group: {
      _id: "$medicoAsignado",
      pacientes: { $addToSet: "$pacienteAtendido" }
    }
  },
  {
    $project: {
      medico: "$_id",
      totalPacientes: { $size: "$pacientes" }
    }
  }
]);

// 47. Total de visitas por diagnóstico específico
db.HistorialMedico.aggregate([
  { $match: { diagnostico: "Diabetes" } },
  {
    $group: {
      _id: "$numeroHC",
      casos: { $sum: 1 }
    }
  }
]);

// 48. Médicos que han atendido en un día específico
db.VisitasMedicas.aggregate([
  { $match: { fecha: ISODate("2025-07-29") } },
  { $group: { _id: "$medicoAsignado" } }
]);

// 49. Listar tratamientos con medicamentos relacionados
db.Tratamiento.aggregate([
  { $unwind: "$medicamento" },
  {
    $lookup: {
      from: "Medicamentos",
      localField: "medicamento",
      foreignField: "_id",
      as: "infoMedicamento"
    }
  }
]);

// 50. Mostrar cantidad de médicos por hospital
db.Personal.aggregate([
  { $match: { tipoPersonal: "002" } },
  {
    $group: {
      _id: "$hospitalAsignado",
      totalMedicos: { $sum: 1 }
    }
  }
]);

// 51. Listar pacientes con más de un seguro médico
db.Seguros.aggregate([
  { $group: { _id: "$numeroHC", totalSeguros: { $sum: 1 } } },
  { $match: { totalSeguros: { $gt: 1 } } }
]);

// 52. Mostrar visitas médicas por fecha específica
db.VisitasMedicas.find({ fecha: ISODate("2025-07-01T00:00:00Z") });

// 53. Ver personal con salarios superiores a 6 millones
db.Personal.find({ salario: { $gt: 6000000 } });

// 54. Obtener pacientes que han recibido tratamientos específicos
db.VisitasMedicas.find({ tratamientosAplicados: "Tratamiento A" });

// 55. Buscar medicamentos con disponibilidad crítica (<10)
db.Medicamentos.find({ disponibilidad: { $lt: 10 } });

// 56. Contar número total de médicos por hospital
db.Personal.aggregate([
  { $match: { tipoPersonal: "002" } },
  { $group: { _id: "$hospitalAsignado", totalMedicos: { $sum: 1 } } }
]);

// 57. Promedio de salario por tipo de personal
db.Personal.aggregate([
  { $group: { _id: "$tipoPersonal", promedioSalario: { $avg: "$salario" } } }
]);

// 58. Buscar pacientes con historial de diagnóstico "asma"
db.HistorialMedico.find({ diagnostico: { $regex: /asma/i } });

// 59. Cantidad de tratamientos por tipo de área médica
db.Tratamiento.aggregate([
  { $group: { _id: "$areaRelacionada", totalTratamientos: { $sum: 1 } } }
]);

// 60. Ver visitas médicas de un paciente por fecha
db.VisitasMedicas.find({ pacienteAtendido: "HC001", fecha: { $gte: ISODate("2025-01-01"), $lte: ISODate("2025-12-31") } });

// 61. Obtener médicos que han aplicado más de 5 tratamientos
db.VisitasMedicas.aggregate([
  { $unwind: "$tratamientosAplicados" },
  { $group: { _id: "$medicoAsignado", total: { $sum: 1 } } },
  { $match: { total: { $gt: 5 } } }
]);

// 62. Medicamentos agrupados por fabricante
db.Medicamentos.aggregate([
  { $group: { _id: "$fabricante", total: { $sum: 1 } } }
]);

// 63. Historial médico ordenado por fecha descendente
db.HistorialMedico.find().sort({ fecha: -1 });

// 64. Consultar tratamientos con más de un medicamento
db.Tratamiento.find({ medicamento: { $size: { $gt: 1 } } });

// 65. Buscar pacientes con dirección que contenga "Bogotá"
db.Pacientes.find({ direccion: { $regex: /Bogotá/i } });

// 66. Ver seguros por compañía
db.Seguros.aggregate([
  { $group: { _id: "$nombreCompañía", total: { $sum: 1 } } }
]);

// 67. Mostrar visitas con tratamientos aplicados mayores a 2
db.VisitasMedicas.find({ "tratamientosAplicados.2": { $exists: true } });

// 68. Total de visitas médicas por médico
db.VisitasMedicas.aggregate([
  { $group: { _id: "$medicoAsignado", totalVisitas: { $sum: 1 } } }
]);

// 69. Pacientes sin dirección registrada
db.Pacientes.find({ direccion: "" });

// 70. Personal administrativo por hospital
db.Personal.find({ tipoPersonal: "004" }).sort({ hospitalAsignado: 1 });

// 71. Promedio de tratamientos aplicados por visita médica
db.VisitasMedicas.aggregate([
  { $project: { cantidadTratamientos: { $size: "$tratamientosAplicados" } } },
  { $group: { _id: null, promedio: { $avg: "$cantidadTratamientos" } } }
]);

// 72. Cantidad de visitas médicas por año
db.VisitasMedicas.aggregate([
  {
    $group: {
      _id: { $year: "$fecha" },
      total: { $sum: 1 }
    }
  }
]);

// 73. Buscar historial médico con notas que contengan la palabra "urgente"
db.HistorialMedico.find({ notas: { $regex: /urgente/i } });

// 74. Buscar pacientes que han sido atendidos por un médico específico
db.VisitasMedicas.find({ medicoAsignado: "MED001" });

// 75. Mostrar los hospitales con más de 3 áreas especializadas
db.Hospital.find({ $expr: { $gt: [ { $size: "$areasEspecializadas" }, 3 ] } });


// 76. Listar todos los tratamientos aplicados en un hospital específico
db.visitasMedicas.aggregate([
  { $unwind: "$tratamientosAplicados" },
  {
    $lookup: {
      from: "tratamiento",
      localField: "tratamientosAplicados",
      foreignField: "_id",
      as: "detalleTratamiento"
    }
  },
  { $unwind: "$detalleTratamiento" },
  {
    $match: { "detalleTratamiento.areaRelacionada": "Cardiología" }
  },
  {
    $project: {
      pacienteAtendido: 1,
      fecha: 1,
      "detalleTratamiento.nombre": 1,
      "detalleTratamiento.descripcion": 1
    }
  }
]);

// 77. Buscar pacientes con seguros de cobertura completa
db.seguros.aggregate([
  {
    $match: { tipoCobertura: { $regex: /completa/i } }
  },
  {
    $lookup: {
      from: "pacientes",
      localField: "numeroHC",
      foreignField: "numeroHC",
      as: "datosPaciente"
    }
  },
  { $unwind: "$datosPaciente" },
  {
    $project: {
      nombrePaciente: "$datosPaciente.nombre",
      correo: "$datosPaciente.correo",
      nombreCompañía: 1,
      tipoCobertura: 1
    }
  }
]);

// 78. Total de medicamentos disponibles por fabricante
db.medicamentos.aggregate([
  {
    $group: {
      _id: "$fabricante",
      totalDisponibles: { $sum: "$disponibilidad" }
    }
  }
]);

// 79. Obtener visitas médicas con más de un tratamiento aplicado
db.visitasMedicas.find({
  "tratamientosAplicados.1": { $exists: true }
});

// 80. Obtener todos los pacientes sin historial médico registrado
db.pacientes.aggregate([
  {
    $lookup: {
      from: "historialMedico",
      localField: "numeroHC",
      foreignField: "numeroHC",
      as: "historial"
    }
  },
  {
    $match: { "historial": { $eq: [] } }
  }
]);

// 81. Número de visitas médicas por mes
db.visitasMedicas.aggregate([
  {
    $group: {
      _id: { $month: "$fecha" },
      totalVisitas: { $sum: 1 }
    }
  },
  { $sort: { "_id": 1 } }
]);

// 82. Obtener lista de personal administrativo ordenado por nombre
db.personal.find({ tipoPersonal: "004" }).sort({ nombre: 1 });

// 83. Buscar medicamentos de un fabricante específico y su disponibilidad
db.medicamentos.find({ fabricante: "Pfizer" }, { nombre: 1, disponibilidad: 1 });

// 84. Consultar pacientes atendidos por un médico específico
db.visitasMedicas.aggregate([
  {
    $match: { medicoAsignado: "M123" }
  },
  {
    $lookup: {
      from: "pacientes",
      localField: "pacienteAtendido",
      foreignField: "numeroHC",
      as: "paciente"
    }
  },
  { $unwind: "$paciente" },
  {
    $project: {
      fecha: 1,
      nombrePaciente: "$paciente.nombre"
    }
  }
]);

// 85. Listar tratamientos utilizados en más de una visita
db.visitasMedicas.aggregate([
  { $unwind: "$tratamientosAplicados" },
  {
    $group: {
      _id: "$tratamientosAplicados",
      conteo: { $sum: 1 }
    }
  },
  { $match: { conteo: { $gt: 1 } } }
]);

// 86. Total de pacientes por dirección
db.pacientes.aggregate([
  {
    $group: {
      _id: "$direccion",
      totalPacientes: { $sum: 1 }
    }
  }
]);

// 87. Diagnósticos más frecuentes en historiales médicos
db.historialMedico.aggregate([
  {
    $group: {
      _id: "$diagnostico",
      vecesRegistrado: { $sum: 1 }
    }
  },
  { $sort: { vecesRegistrado: -1 } }
]);

// 88. Listar personal con salario superior a 4 millones
db.personal.find({ salario: { $gt: 4000000 } });

// 89. Pacientes con más de un seguro registrado
db.seguros.aggregate([
  {
    $group: {
      _id: "$numeroHC",
      cantidad: { $sum: 1 }
    }
  },
  { $match: { cantidad: { $gt: 1 } } }
]);

// 90. Ver disponibilidad de un medicamento específico
db.medicamentos.find({ nombre: "Paracetamol" }, { disponibilidad: 1 });

// 91. Ver todos los diagnósticos de un paciente específico
db.historialMedico.find({ numeroHC: "HC1002" }, { diagnostico: 1 });

// 92. Buscar pacientes por correo electrónico
db.pacientes.find({ correo: { $regex: /@gmail.com$/i } });

// 93. Promedio de disponibilidad de medicamentos
db.medicamentos.aggregate([
  {
    $group: {
      _id: null,
      promedioDisponibilidad: { $avg: "$disponibilidad" }
    }
  }
]);

// 94. Especialidades médicas y su número de médicos
db.personal.aggregate([
  {
    $group: {
      _id: "$especialidad",
      total: { $sum: 1 }
    }
  }
]);

// 95. Ver tareas de mantenimiento realizadas por día
db.personal.aggregate([
  { $match: { tipoPersonal: "005" } },
  {
    $lookup: {
      from: "visitasMedicas",
      localField: "_id",
      foreignField: "medicoAsignado",
      as: "tareas"
    }
  },
  { $project: { nombre: 1, totalTareas: { $size: "$tareas" } } }
]);

// 96. Listar áreas especializadas por hospital
db.hospital.find({}, { areasEspecializadas: 1 });

// 97. Obtener correo y teléfono de médicos especialistas
db.personal.find({ tipoPersonal: "002" }, { correo: 1, telefono: 1 });

// 98. Ver tratamientos asignados a un paciente específico
db.visitasMedicas.aggregate([
  { $match: { pacienteAtendido: "HC1005" } },
  { $unwind: "$tratamientosAplicados" },
  {
    $lookup: {
      from: "tratamiento",
      localField: "tratamientosAplicados",
      foreignField: "_id",
      as: "tratamiento"
    }
  },
  { $unwind: "$tratamiento" },
  {
    $project: {
      fecha: 1,
      nombreTratamiento: "$tratamiento.nombre"
    }
  }
]);

// 99. Mostrar visitas en una fecha específica
db.visitasMedicas.find({ fecha: ISODate("2025-07-20") });

// 100. Ver cantidad de tratamientos disponibles por área
db.tratamiento.aggregate([
  {
    $group: {
      _id: "$areaRelacionada",
      totalTratamientos: { $sum: 1 }
    }
  }
]);

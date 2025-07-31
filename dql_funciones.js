// Funciones para consultas en la base de datos MongoDB
function buscarPersonalPorEmailTermino(termino) {
    return db.personal.find({
        correo: new RegExp(termino + "$", "i")
    }).toArray();
}

// Buscar pacientes con seguro de una compañía específica
function pacientesConSeguro(compania) {
    return db.pacientes.aggregate([
        {
            $lookup: {
                from: "seguros",
                localField: "numeroHC",
                foreignField: "numeroHC",
                as: "seguros"
            }
        },
        {
            $match: {
                "seguros.nombreCompañía": compania
            }
        }
    ]).toArray();
}

// Buscar medicamentos por nombre
db.medicamentos.aggregate([
    { $group: { _id: "$hospitalId", total: { $sum: "$disponibilidad" } } }
]);

// Contar diagnósticos en el historial médico
db.historialMedico.aggregate([
    { $group: { _id: "$diagnostico", cantidad: { $sum: 1 } } }
]);

// Buscar medicamentos por nombre
db.historialMedico.aggregate([
    { $group: { _id: "$diagnostico", cantidad: { $sum: 1 } } }
]);

// Contar tratamientos aplicados por médico en visitas médicas 
db.visitasMedicas.aggregate([
    {
        $lookup: {
            from: "personal",
            localField: "medicoAsignado",
            foreignField: "_id",
            as: "medico"
        }
    },
    { $unwind: "$medico" },
    {
        $group: {
            _id: "$medico.hospitalAsignado",
            totalTratamientos: { $sum: { $size: "$tratamientosAplicados" } }
        }
    }
]);

// Buscar pacientes con alergias específicas
db.coleccion5.find({ "campo4": "valor4" });

// Contar disponibilidad de medicamentos por fabricante
db.medicamentos.aggregate([
    {
        $group: {
            _id: "$fabricante",
            totalDisponibles: { $sum: "$disponibilidad" }
        }
    }
]);

// Contar frecuencia de diagnósticos en el historial médico
db.historialMedico.aggregate([
    {
        $group: {
            _id: "$diagnostico",
            frecuencia: { $sum: 1 }
        }
    },
    { $sort: { frecuencia: -1 } }
]);


// Contar tratamientos aplicados por médico en visitas médicas
db.visitasMedicas.aggregate([
    {
        $lookup: {
            from: "personal",
            localField: "medicoAsignado",
            foreignField: "_id",
            as: "medico"
        }
    },
    { $unwind: "$medico" },
    {
        $group: {
            _id: "$medico.hospitalAsignado",
            tratamientosAplicados: { $sum: { $size: "$tratamientosAplicados" } }
        }
    }
]);

// Validar datos de un paciente
function validarDatosPaciente(paciente) {
  const requiredFields = ["numeroHC", "nombre", "correo", "direccion"];
  const missingFields = requiredFields.filter(field => !paciente[field]);
  
  if (missingFields.length > 0) {
    return {
      valido: false,
      errores: `Faltan campos obligatorios: ${missingFields.join(", ")}`
    };
  }
  
  if (!/^HC\d{4}$/.test(paciente.numeroHC)) {
    return {
      valido: false,
      errores: "Formato de número de historia clínica inválido"
    };
  }
  
  return { valido: true };
}

// Contar seguros por número de historia clínica
db.seguros.aggregate([
  {
    $group: {
      _id: "$numeroHC",
      cantidadSeguros: { $sum: 1 }
    }
  }
]);

// Contar personal por especialidad
db.personal.aggregate([
  {
    $match: { tipoPersonal: "002" }
  },
  {
    $group: {
      _id: "$especialidad",
      cantidad: { $sum: 1 }
    }
  }
]);

// Contar visitas médicas por fecha
db.visitasMedicas.aggregate([
  {
    $group: {
      _id: "$fecha",
      visitas: { $sum: 1 }
    }
  }
]);

// Contar tratamientos aplicados por tipo de tratamiento
db.visitasMedicas.aggregate([
  { $unwind: "$tratamientosAplicados" },
  {
    $group: {
      _id: "$tratamientosAplicados",
      vecesAplicado: { $sum: 1 }
    }
  },
  { $sort: { vecesAplicado: -1 } }
]);


// Contar pacientes por dirección
db.pacientes.aggregate([
  {
    $group: {
      _id: "$direccion",
      cantidad: { $sum: 1 }
    }
  }
]);

// Contar personal por hospital asignado
db.personal.aggregate([
  {
    $group: {
      _id: "$hospitalAsignado",
      totalPersonal: { $sum: 1 }
    }
  },
  { $sort: { totalPersonal: -1 } },
  { $limit: 1 }
]);

// Buscar diagnósticos por número de historia clínica
function diagnosticosPorPaciente(numeroHC) {
  return db.historialMedico.find({ numeroHC: numeroHC }, { diagnostico: 1 });
}

// Contar personal por tipo de personal
db.personal.aggregate([
  {
    $group: {
      _id: "$tipoPersonal",
      cantidad: { $sum: 1 }
    }
  }
]);

// Buscar seguros activos por número de historia clínica
function segurosActivosPorPaciente(numeroHC) {
  return db.seguros.find({ numeroHC: numeroHC });
}

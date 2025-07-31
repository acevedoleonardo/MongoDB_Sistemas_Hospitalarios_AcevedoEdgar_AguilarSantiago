// HOSPITALES
db.hospitales.insertOne({
  _id: ObjectId("5f8d8a7b2f4d1e3d6c9b2a1a"),
  areasEspecializadas: "Cardiología, Neurología, Pediatría",
  nombre: "Hospital General de la Ciudad",
  direccion: "Av. Principal 1234",
  telefono: "01-2345678",
  capacidad: 500
});


db.hospitales.insertOne({
  _id: ObjectId("5f8d8a7b2f4d1e3d6c9b2a1b"),
  areasEspecializadas: "Traumatología, Ginecología",
  nombre: "Centro Médico Especializado",
  direccion: "Calle Secundaria 567",
  telefono: "01-8765432",
  capacidad: 300
});


db.hospitales.insertOne({
  _id: ObjectId("5f8d8a7b2f4d1e3d6c9b2a1c"),
  areasEspecializadas: "Pediatría, Ginecología",
  nombre: "Hospital Materno Infantil",
  direccion: "Av. Salud 789",
  telefono: "01-3456789",
  capacidad: 250
});

// PACIENTES

db.pacientes.insertOne({
  numeroHC: "HC0001",
  nombre: "Juan Pérez",
  correo: "juan.perez@email.com",
  direccion: "Calle Primavera 123",
  fechaNacimiento: new Date("1980-05-15"),
  genero: "Masculino",
  telefono: "912345678"
});


db.pacientes.insertOne({
  numeroHC: "HC0002",
  nombre: "María González",
  correo: "maria.gonzalez@email.com",
  direccion: "Av. Libertad 456",
  fechaNacimiento: new Date("1975-10-22"),
  genero: "Femenino",
  telefono: "923456789"
});

// Paciente 3
db.pacientes.insertOne({
  numeroHC: "HC0003",
  nombre: "Carlos Rodríguez",
  correo: "carlos.rodriguez@email.com",
  direccion: "Jr. Flores 789",
  fechaNacimiento: new Date("1990-03-08"),
  genero: "Masculino",
  telefono: "934567890"
});


db.pacientes.insertOne({
  numeroHC: "HC0004",
  nombre: "Ana Martínez",
  correo: "ana.martinez@email.com",
  direccion: "Calle Luna 101",
  fechaNacimiento: new Date("1988-07-30"),
  genero: "Femenino",
  telefono: "945678901"
});


db.pacientes.insertOne({
  numeroHC: "HC0005",
  nombre: "Luis Sánchez",
  correo: "luis.sanchez@email.com",
  direccion: "Av. Sol 202",
  fechaNacimiento: new Date("1972-12-05"),
  genero: "Masculino",
  telefono: "956789012"
});


db.pacientes.insertOne({
  numeroHC: "HC0006",
  nombre: "Sofía Ramírez",
  correo: "sofia.ramirez@email.com",
  direccion: "Jr. Estrella 303",
  fechaNacimiento: new Date("1995-02-18"),
  genero: "Femenino",
  telefono: "967890123"
});


db.pacientes.insertOne({
  numeroHC: "HC0007",
  nombre: "Pedro Gómez",
  correo: "pedro.gomez@email.com",
  direccion: "Calle Arcoiris 404",
  fechaNacimiento: new Date("1983-09-25"),
  genero: "Masculino",
  telefono: "978901234"
});


db.pacientes.insertOne({
  numeroHC: "HC0008",
  nombre: "Lucía Díaz",
  correo: "lucia.diaz@email.com",
  direccion: "Av. Nube 505",
  fechaNacimiento: new Date("1978-04-12"),
  genero: "Femenino",
  telefono: "989012345"
});


db.pacientes.insertOne({
  numeroHC: "HC0009",
  nombre: "Jorge Herrera",
  correo: "jorge.herrera@email.com",
  direccion: "Jr. Viento 606",
  fechaNacimiento: new Date("1965-11-30"),
  genero: "Masculino",
  telefono: "990123456"
});

/
db.pacientes.insertOne({
  numeroHC: "HC0010",
  nombre: "Elena Castro",
  correo: "elena.castro@email.com",
  direccion: "Calle Mar 707",
  fechaNacimiento: new Date("1992-08-15"),
  genero: "Femenino",
  telefono: "901234567"
});

// PERSONAL
db.personal.insertOne({
  numerColegiatura: "DG001",
  nombre: "Dr. Roberto Mendoza",
  correo: "rmendoza@hospitalgeneral.com",
  telefono: "987654321",
  especialidad: "Administración Hospitalaria",
  tipoEspecialidad: null,
  salario: 15000,
  hospitalAsignado: ObjectId("5f8d8a7b2f4d1e3d6c9b2a1a"),
  tipoPersonal: "001"
});


db.personal.insertOne({
  numerColegiatura: "ME12345",
  nombre: "Dra. Laura Pérez",
  correo: "lperez@hospitalgeneral.com",
  telefono: "987123456",
  especialidad: "Cardióloga",
  tipoEspecialidad: "Cardiología",
  salario: 12000,
  hospitalAsignado: ObjectId("5f8d8a7b2f4d1e3d6c9b2a1a"),
  tipoPersonal: "002"
});

// Enfermero/a (003)
db.personal.insertOne({
  numerColegiatura: "EN34567",
  nombre: "Sofía Gutierrez",
  correo: "sgutierrez@hospitalgeneral.com",
  telefono: "987234567",
  especialidad: "Enfermería General",
  tipoEspecialidad: null,
  salario: 5000,
  hospitalAsignado: ObjectId("5f8d8a7b2f4d1e3d6c9b2a1a"),
  tipoPersonal: "003"
});

// Personal Administrativo (004)
db.personal.insertOne({
  numerColegiatura: "PA78901",
  nombre: "Carlos Jiménez",
  correo: "cjimenez@hospitalgeneral.com",
  telefono: "987345678",
  especialidad: "Administración",
  tipoEspecialidad: null,
  salario: 4500,
  hospitalAsignado: ObjectId("5f8d8a7b2f4d1e3d6c9b2a1a"),
  tipoPersonal: "004"
});

// Personal de Mantenimiento (005)
db.personal.insertOne({
  numerColegiatura: "PM23456",
  nombre: "Luis Torres",
  correo: "ltorres@hospitalgeneral.com",
  telefono: "987456789",
  especialidad: "Mantenimiento",
  tipoEspecialidad: null,
  salario: 3500,
  hospitalAsignado: ObjectId("5f8d8a7b2f4d1e3d6c9b2a1a"),
  tipoPersonal: "005"
});

// Médico Especialista (002) - Neurología
db.personal.insertOne({
  numerColegiatura: "ME54321",
  nombre: "Dr. Javier Ruiz",
  correo: "jruiz@hospitalgeneral.com",
  telefono: "987567890",
  especialidad: "Neurólogo",
  tipoEspecialidad: "Neurología",
  salario: 12500,
  hospitalAsignado: ObjectId("5f8d8a7b2f4d1e3d6c9b2a1a"),
  tipoPersonal: "002"
});

// Médico Especialista (002) - Pediatría
db.personal.insertOne({
  numerColegiatura: "ME67890",
  nombre: "Dra. Ana López",
  correo: "alopez@maternoinfantil.com",
  telefono: "987678901",
  especialidad: "Pediatra",
  tipoEspecialidad: "Pediatría",
  salario: 11000,
  hospitalAsignado: ObjectId("5f8d8a7b2f4d1e3d6c9b2a1c"),
  tipoPersonal: "002"
});


db.personal.insertOne({
  numerColegiatura: "EN89012",
  nombre: "María Sánchez",
  correo: "msanchez@maternoinfantil.com",
  telefono: "987789012",
  especialidad: "Enfermería Pediátrica",
  tipoEspecialidad: null,
  salario: 5200,
  hospitalAsignado: ObjectId("5f8d8a7b2f4d1e3d6c9b2a1c"),
  tipoPersonal: "003"
});


db.personal.insertOne({
  numerColegiatura: "ME09876",
  nombre: "Dr. Pedro Gómez",
  correo: "pgomez@centromedico.com",
  telefono: "987890123",
  especialidad: "Traumatólogo",
  tipoEspecialidad: "Traumatología",
  salario: 13000,
  hospitalAsignado: ObjectId("5f8d8a7b2f4d1e3d6c9b2a1b"),
  tipoPersonal: "002"
});


db.personal.insertOne({
  numerColegiatura: "ME56789",
  nombre: "Dra. Carmen Vargas",
  correo: "cvargas@centromedico.com",
  telefono: "987901234",
  especialidad: "Ginecóloga",
  tipoEspecialidad: "Ginecología",
  salario: 12000,
  hospitalAsignado: ObjectId("5f8d8a7b2f4d1e3d6c9b2a1b"),
  tipoPersonal: "002"
});

// SEGUROS
db.seguros.insertOne({
  numeroHC: "HC0001",
  nombreCompañía: "Seguros Vida S.A.",
  tipoCobertura: "Completa",
  numeroPoliza: "POL123456",
  fechaVencimiento: new Date("2025-12-31")
});


db.seguros.insertOne({
  numeroHC: "HC0002",
  nombreCompañía: "Asistencia Médica Integral",
  tipoCobertura: "Básica",
  numeroPoliza: "POL789012",
  fechaVencimiento: new Date("2024-10-15")
});


db.seguros.insertOne({
  numeroHC: "HC0005",
  nombreCompañía: "Salud Protegida",
  tipoCobertura: "Premium",
  numeroPoliza: "POL345678",
  fechaVencimiento: new Date("2026-05-20")
})

// TRATAMIENTOS
db.tratamientos.insertOne({
  _id: ObjectId("5f8d8a7b2f4d1e3d6c9b2a2a"),
  nombre: "Angioplastia coronaria",
  descripcion: "Procedimiento para abrir arterias coronarias bloqueadas",
  areaRelacionada: "Cardiología",
  medicamento: [
    ObjectId("5f8d8a7b2f4d1e3d6c9b2a3a"), // Suponiendo que este es un ID de medicamento
    ObjectId("5f8d8a7b2f4d1e3d6c9b2a3b")
  ]
});


db.tratamientos.insertOne({
  _id: ObjectId("5f8d8a7b2f4d1e3d6c9b2a2b"),
  nombre: "Fisioterapia post-quirúrgica",
  descripcion: "Terapia de rehabilitación después de cirugía ortopédica",
  areaRelacionada: "Traumatología",
  medicamento: [
    ObjectId("5f8d8a7b2f4d1e3d6c9b2a3c")
  ]
})

// VERIFICACIONES
// HOSPITALES
db.createCollection("hospitales", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["areasEspecializadas"],
      properties: {
        areasEspecializadas: {
          bsonType: "string",
          description: "Áreas médicas cubiertas por el hospital"
        }
      }
    }
  }
});


// PERSONAL 
db.createCollection("personal", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: [
        "numerColegiatura",
        "nombre",
        "correo",
        "telefono",
        "especialidad",
        "tipoEspecialidad",
        "salario",
        "hospitalAsignado",
        "tipoPersonal"
      ],
      properties: {
        numerColegiatura: {
          bsonType: "string"
        },
        nombre: {
          bsonType: "string"
        },
        correo: {
          bsonType: "string"
        },
        telefono: {
          bsonType: "string"
        },
        especialidad: {
          bsonType: "string"
        },
        tipoEspecialidad: {
          enum: [
            "Cardiología",
            "Neurología",
            "Pediatría",
            "Traumatología",
            "Ginecología"
          ]
        },
        salario: {
          bsonType: "int"
        },
        hospitalAsignado: {
          bsonType: "objectId"
        },
        tipoPersonal: {
          enum: ["001", "002", "003", "004", "005"]
        }
      }
    }
  }
});

// PACIENTES
db.createCollection("pacientes", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["numeroHC", "nombre", "correo", "direccion"],
      properties: {
        numeroHC: {
          bsonType: "string"
        },
        nombre: {
          bsonType: "string"
        },
        correo: {
          bsonType: "string"
        },
        direccion: {
          bsonType: "string"
        }
      }
    }
  }
});

// HISTORIAL MÉDICO
db.createCollection("historialMedico", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["numeroHC", "fecha", "diagnostico", "descripcion", "notas"],
      properties: {
        numeroHC: {
          bsonType: "string"
        },
        fecha: {
          bsonType: "date"
        },
        diagnostico: {
          bsonType: "string"
        },
        descripcion: {
          bsonType: "string"
        },
        notas: {
          bsonType: "string"
        }
      }
    }
  }
});


// SEGUROS
db.createCollection("seguros", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["numeroHC", "nombreCompañía", "tipoCobertura", "numeroPoliza"],
      properties: {
        numeroHC: {
          bsonType: "string"
        },
        nombreCompañía: {
          bsonType: "string"
        },
        tipoCobertura: {
          bsonType: "string"
        },
        numeroPoliza: {
          bsonType: "string"
        }
      }
    }
  }
});

// VISITAS MÉDICAS
db.createCollection("visitasMedicas", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["pacienteAtendido", "fecha", "hora", "medicoAsignado", "tratamientosAplicados"],
      properties: {
        pacienteAtendido: {
          bsonType: "string"
        },
        fecha: {
          bsonType: "date"
        },
        hora: {
          bsonType: "string"
        },
        medicoAsignado: {
          bsonType: "objectId"
        },
        tratamientosAplicados: {
          bsonType: "array",
          items: {
            bsonType: "objectId"
          }
        }
      }
    }
  }
});


// TRATAMIENTOS
db.createCollection("tratamientos", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["nombre", "descripcion", "areaRelacionada", "medicamento"],
      properties: {
        nombre: {
          bsonType: "string"
        },
        descripcion: {
          bsonType: "string"
        },
        areaRelacionada: {
          bsonType: "string"
        },
        medicamento: {
          bsonType: "array",
          items: {
            bsonType: "objectId"
          }
        }
      }
    }
  }
});

// MEDICAMENTOS
db.createCollection("medicamentos", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["fabricante", "disponibilidad"],
      properties: {
        fabricante: {
          bsonType: "string"
        },
        disponibilidad: {
          bsonType: "int"
        }
      }
    }
  }
});

// VISITAS MÉDICAS
db.visitasMedicas.insertOne({
  pacienteAtendido: "HC0001",
  fecha: new Date("2023-05-10"),
  hora: "09:30",
  medicoAsignado: ObjectId("5f8d8a7b2f4d1e3d6c9b2a1a"), // ID del Dr. Roberto Mendoza
  tratamientosAplicados: [
    ObjectId("5f8d8a7b2f4d1e3d6c9b2a2a") // Angioplastia coronaria
  ],
  diagnostico: "Enfermedad coronaria obstructiva",
  observaciones: "Paciente responde bien al tratamiento"
});


db.visitasMedicas.insertOne({
  pacienteAtendido: "HC0005",
  fecha: new Date("2023-06-15"),
  hora: "11:00",
  medicoAsignado: ObjectId("5f8d8a7b2f4d1e3d6c9b2a1b"), // ID del Dr. Pedro Gómez
  tratamientosAplicados: [
    ObjectId("5f8d8a7b2f4d1e3d6c9b2a2b") // Fisioterapia post-quirúrgica
  ],
  diagnostico: "Fractura de fémur post-caída",
  observaciones: "Paciente en proceso de rehabilitación"
})

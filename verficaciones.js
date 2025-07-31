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

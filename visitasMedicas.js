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

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
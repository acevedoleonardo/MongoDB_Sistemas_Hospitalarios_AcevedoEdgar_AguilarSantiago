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
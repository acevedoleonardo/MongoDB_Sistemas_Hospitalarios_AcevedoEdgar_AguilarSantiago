
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
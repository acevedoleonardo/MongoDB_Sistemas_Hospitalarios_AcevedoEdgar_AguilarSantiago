# Proyecto BBDD Sistema Hospitalario 🏥 .



​	El objetivo del proyecto es diseñar y desarrollar un sistema de base de datos en **MongoDB** que permita gestionar de manera eficiente todas las operaciones relacionadas con la administración de un **Sistema Hospitalario**. Dicho sistema incluirá la gestión de hospitales, pacientes, médicos, tratamientos, medicamentos, visitas médicas, historiales clínicos, áreas especializadas y personal administrativo. 



## 💻 Introducción 💻



​	<u>El presente documento tiene como objetivo describir el diseño y desarrollo de un sistema de base de datos en MongoDB orientado a la gestión integral de un Sistema Hospitalario. Este proyecto responde a la necesidad de administrar de manera eficiente y centralizada las operaciones fundamentales de un hospital moderno, optimizando.</u>



​	<u>El sistema está diseñado para cubrir todos los aspectos clave de la administración hospitalaria, incluyendo la gestión de hospitales, pacientes, médicos, tratamientos, medicamentos, visitas médicas, historiales clínicos, áreas especializadas y personal administrativo. Al utilizar MongoDB como base de datos NoSQL, se busca aprovechar su flexibilidad y escalabilidad para manejar grandes volúmenes de datos estructurados y no estructurados, adaptándose a la diversidad y complejidad de la información hospitalaria.</u>



​	<u>La gestión eficiente y segura de la información en los entornos hospitalarios constituye hoy en día un desafío clave para la mejora de los servicios de salud. El crecimiento de la demanda, el aumento en la complejidad de los datos clínicos y administrativos, así como la necesidad de ofrecer una atención personalizada y ágil, han evidenciado las limitaciones de los sistemas tradicionales y la importancia de soluciones tecnológicas flexibles y escalables.</u>



​	<u>En este contexto, el proyecto aplicado en el Centro Médico Bucaramanga surge con el objetivo de diseñar e implementar un sistema de base de datos moderno utilizando MongoDB, una plataforma NoSQL orientada a documentos capaz de centralizar y gestionar de manera eficiente las operaciones hospitalarias más críticas. Este sistema abarca la administración integral de hospitales, pacientes, médicos, tratamientos, medicamentos, visitas médicas, historiales clínicos, áreas especializadas y personal administrativo, cubriendo así todas las operaciones fundamentales de la organización hospitalaria.</u>



# Tabla de Contenidos 📇 



- 🏥Proyecto BBDD Sistemas Hospitalarios  

- 💻 Introducción 

- 🛂Requisitos del Sistema

- 🔧Instalación

- ⚙️Configuración

- ✍🏼 Caso de Estudio

- 😵‍💫 Problemática

- 🪢 Modelado de Base de Datos

- 🚦 Control de Acceso y Roles de Usuario

- 📄Repositorio y Documentación

- 🍀Resultados 

  





# 🛂 Requisitos del Sistema 🛂



Para el desarrollo del **Sistema Hospitalario en MongoDB**, se utiliza los siguiente entornos:



- **Visual Studio Code**

  Es el editor de código principal.  Permite mantener una estructura organizada del proyecto y colaborar de manera eficiente.



- **MongoDB** 

  Es el motor de base de datos NoSQL que permite crear, estructurar y almacenar toda la información hospitalaria, permitiendo trabajar con colecciones flexibles y relaciones referenciales.

  

- **MongoDB Compass**

  Esta herramienta facilita la visualización y validación de las colecciones, así como la ejecución de consultas y operaciones CRUD durante el proceso de pruebas.



# 🔧 Instalación 🔧



1️⃣ Para iniciar con el proceso de instalación lo primero que se debe descargar en el ordenador es Mongodb compass y para ellos se va directamente a su pagina oficial https://www.mongodb.com/try/download/community en donde se encontrara el archivo descargable msi en su ultima versión para cualquier sistema operativo. Para el presente proyecto se trabajo en el entorno windows 11. 

2️⃣ Para trabajar de manera eficiente y optima se descarga Visual studio Code el cual es un editor de codigo fuente, esta es una herramienta que nos permitirá programar de una manera mas organizada y estructurada. Así mismo la herramienta se encuentra de manera gratuita en su pagina oficial https://code.visualstudio.com/ allí se encontra la ultima versión existente. 

3️⃣ Adicional a las descargas mencionadas con anterioridad es importarte realizar una ultima descarga la cual consiste en una herramienta llamada MongoDB Shell que en efecto seria la terminal de mongo, se descarga directamente en su pagina oficial https://www.mongodb.com/try/download/shell. 



# ⚙️ Configuración ⚙️



## Paso 1: Ingresar a la terminal de MongoDB 

MongoDB Shell y tipiar el siguiente comando

```js
mongosh 
```



## Paso 2: Se crea la Base de Datos 

Utilizando el comando Use se crea la base de datos y se trabaja en ella. 

```js
use hospitales
```



## Paso 3: Se Crea las Colecciones

Utilizando el comando db.createCollection

```js
db.createCollection("Nombre_Colección ")
```



## Paso 4: Se ingresa la Data 

Utilizando el siguiente comando **insertMany**

Ejemplo: 

``` js
db.hospitales.insertMany([ 
{
    nombre: "Hospital Central",
    direccion: "Calle 123 #45-67, Bogotá",
    directorid: 1,
    areas: ["Urgencias", "Pediatría", "Cirugía"],
  ]},`
```



# ✍🏼 Caso de Estudio ✍🏼



El Centro Médico Bucaramanga es una red hospitalaria con tres sedes principales en la ciudad, cada una especializada en diferentes áreas médicas como Cardiología, Neurología y Pediatría. Antes de la implementación del proyecto, la información sobre pacientes, personal médico, tratamientos y recursos estaba dispersa en diversos sistemas y registros físicos, provocando retrasos en la atención, duplicidad de datos y dificultades en la toma de decisiones administrativas.



## 😵‍💫 Problemática 😵‍💫 



La administración del Centro Médico detectó varios problemas:

●   **Gestión descentralizada de hospitales**: Falta de control sobre las áreas especializadas y la asignación de personal. 

●   **Dificultad para acceder a historiales clínicos completos y actualizados** de los pacientes, lo que afectaba la continuidad de la atención. 

●   **Inventarios de medicamentos ineficientes**, causando faltantes y mal uso de los recursos. 

●   **Procesos manuales en la gestión de agendas médicas**, visitas y asignación de tareas para el personal administrativo y de mantenimiento. 

●   **Débil control de acceso y falta de roles definidos**, lo que generaba problemas de privacidad y seguridad de la información médica.



# 🪢 Modelado de Base de Datos 🪢



Se diseño una base de datos partiendo de los requerimientos solicitados por el cliente: 



●   **Hospitales**: Cada hospital con múltiples áreas especializadas; un director general puede supervisar varios hospitales. 

●   **Personal y Roles**: Registro detallado de médicos, enfermeras, administrativos y mantenimiento, cada uno con permisos específicos. 

●   **Pacientes**: Identificación única, historial médico estructurado, información de contacto y seguros. 

●   **Tratamientos y Medicamentos**: Integración del inventario, costos y relación con áreas médicas. 

●   **Visitas Médicas**: Registro completo con fecha, hora, médico asignado, diagnóstico y seguimiento de visitas múltiples al mismo paciente.



## 🚦 Control de Acceso y Roles de Usuario 🚦



- Se definieron 5 tipos de usuarios con permisos estrictos según el rol:

  

  * Director general: Acceso total.

  * Médico especialista: Acceso a datos de pacientes y diagnósticos.

  * Enfermero/a: Acceso solo a pacientes asignados.

  - Personal administrativo: Acceso a tareas logísticas y gestión de recursos.

  - Personal de mantenimiento: Acceso solo a datos de infraestructura y tareas asignadas. 





```js
db.createRole({
  role: "directorGeneral",
  privileges: [
    { resource: { db: "hospitalDB", collection: "" }, actions: [ "readWrite", "dbAdmin", "userAdmin" ] }
  ],
  roles: []
}),


db.createRole({
  role: "medicoEspecialista",
  privileges: [
    { resource: { db: "hospitalDB", collection: "Pacientes" }, actions: [ "find", "update" ] },
    { resource: { db: "hospitalDB", collection: "HistorialMedico" }, actions: [ "find", "insert" ] },
    { resource: { db: "hospitalDB", collection: "VisitasMedicas" }, actions: [ "find", "insert" ] }
  ],
  roles: []
}),

db.createRole({
  role: "enfermeria",
  privileges: [
    { resource: { db: "hospitalDB", collection: "Pacientes" }, actions: [ "find" ] },
    { resource: { db: "hospitalDB", collection: "VisitasMedicas" }, actions: [ "find" ] }
  ],
  roles: []
}),

db.createRole({
  role: "administrativo",
  privileges: [
    { resource: { db: "hospitalDB", collection: "Hospital" }, actions: [ "find", "update" ] },
    { resource: { db: "hospitalDB", collection: "Personal" }, actions: [ "find", "insert", "update" ] }
  ],
  roles: []
}),

db.createRole({
  role: "mantenimiento",
  privileges: [
    { resource: { db: "hospitalDB", collection: "Hospital" }, actions: [ "find" ] }
  ],
  roles: []
})

```





## 📄Repositorio y Documentación📄



Todo el sistema, consultas y documentación técnica se integraron en un repositorio publico de GitHub, facilitando el mantenimiento y futuras expansiones.



## 🍀Resultados🍀



- **Mejora en la trazabilidad y velocidad de acceso** a la información clínica y de recursos.

- **Eficiencia operativa en la gestión de inventarios**, reduciendo errores y desperdicio de medicamentos.

- **Asistencia médica optimizada** al contar con historiales completos y diagnósticos previos.

- **Mayor seguridad y confidencialidad** mediante control de roles y accesos personalizados.

- **Mejor coordinación interna** a través de reportes automatizados y funciones reutilizables.

  

# 🏙️Planificación🏙️



## 📖Construcción del Modelo Conceptual📖



El modelo conceptual representa las entidades principales del sistema, sus atributos y las relaciones entre ellas, estructurando la información necesaria para la gestión hospitalaria. Se recomienda ilustrarlo mediante un diagrama Entidad-Relación (E/R) adaptado a la lógica NoSQL de MongoDB, empleando colecciones y referencias donde sea necesario.



## ⛓️Entidades y Relaciones Principales ⛓️



- **Área Especializada**
  - Atributos: idArea, nombre, idHospital (referencia), descripción.
  - Relaciones: Cada área pertenece a un hospital y puede agrupar equipo médico especializado.
- **Personal**
  - Atributos comunes: idPersonal, nombre, apellido, teléfono, correo, salario, tipo (Director, Médico, Enfermero, Administrativo, Mantenimiento), idHospital.
  - Relaciones:
    - Un médico puede estar asignado a varias áreas.
    - El director puede estar asignado a varios hospitales.
    - El médico atiende a pacientes en visitas médicas.
- **Paciente**
  - Atributos: idPaciente (número de historia clínica), nombre, dirección, teléfono, correo, seguros, historialClínico[].
  - Relaciones: Un paciente puede tener muchas visitas médicas y múltiples tratamientos asociados.
- **Historial Clínico**
  - Atributos: idHistorial, idPaciente (referencia), diagnósticos[], tratamientos[], resultados[].
  - Relaciones: Hace referencia a diagnósticos y tratamientos recibidos en distintos momentos.

- **Visita Médica**
  - Atributos: idVisita, fecha, hora, idPaciente, idMedico, diagnóstico, idArea.
  - Relaciones: Cada visita está ligada a un paciente y un médico.
- **Tratamiento**
  - Atributos: idTratamiento, nombre, descripción, idArea, costo, medicamentos[].
  - Relaciones: Un tratamiento puede usar varios medicamentos y estar relacionado con un área.
- **Medicamento**
  - Atributos: idMedicamento, nombre, fabricante, tipo, disponibilidad, inventario.
- **Acceso y Roles de Usuario**
  - Atributos: idUsuario, idPersonal, rol (Director, Médico, Enfermero, Administrativo, Mantenimiento), permisos. 

## 🎯Descripción🎯

​	Para el desarrollo del modelo, se tomaron como base entidades clave, siendo los hospitales el núcleo principal del sistema. Cada hospital mantiene conexiones directas con sus diferentes áreas especializadas, con el conjunto de su personal (incluyendo médicos, personal administrativo, enfermería, directivos y personal de servicios), así como con los pacientes que reciben atención. Sobre esta estructura fundamental, se modelaron otras entidades relevantes como pacientes, registros de visitas médicas, historiales clínicos, tratamientos y medicamentos, todas ellas interrelacionadas mediante referencias precisas, lo que permite rastrear de manera integral el proceso de atención dentro del sistema



## 📈Grafica📈

<img src="img/Modelo_Conceptual _ Mermaid Chart-2025-07-31-013747l" alt="Modelo_Conceptual _ Mermaid Chart-2025-07-31-013747" />



## 🎯Descripción Técnica 



El modelo conceptual fue desarrollado bajo un enfoque modular, utilizando **ObjectId** como identificadores únicos para cada documento, y estableciendo referencias explícitas entre ellos para preservar la integridad referencial del sistema. Este diseño garantiza una organización coherente y eficiente de los datos, que facilita tanto la escalabilidad como el mantenimiento.



Para optimizar la reutilización y mantener un alto grado de normalización, se implementaron arreglos referenciales en campos críticos como `hospital`, `medicamentos, paciente` y `areasEspecializadas`. Esta estrategia permite evitar la redundancia y asegura la consistencia de la información, sin comprometer el rendimiento de las consultas.



Este modelo conceptual, sustentado en un diagrama entidad-relación (ER) riguroso y coherente, constituye la base sólida para la transición hacia los modelos lógico y físico. Gracias a esta arquitectura, se evita la necesidad de rediseñar relaciones principales y se asegura un manejo robusto, flexible y eficiente de la información médica, administrativa y operativa que soporta el sistema hospitalario.




# 📖Construcción del modelo Lógico📖



Una vez definido el modelo conceptual, avanzamos hacia la construcción del modelo lógico, en el que transformamos las entidades y relaciones identificadas previamente en una estructura formal adaptada a los principios de una base de datos NoSQL, tomando en cuenta las particularidades de MongoDB.

Durante esta etapa, nos centramos en definir claramente las colecciones, los tipos de datos de cada campo y la forma en que los documentos se enlazan entre sí, mediante referencias o estructuras anidadas, según la necesidad de cada relación. El principal objetivo fue asegurar que todas las relaciones, asociaciones y restricciones planteadas fueran funcionales, eficientes y alineadas con el flujo operativo de un sistema hospitalario real.

El modelo lógico cumple así el rol de puente entre la visión abstracta del sistema (modelo conceptual) y su posterior implementación física, permitiendo anticipar posibles conflictos, optimizar consultas frecuentes y sentar las bases para una gestión robusta e íntegra de la información dentro de la plataforma hospitalaria. 

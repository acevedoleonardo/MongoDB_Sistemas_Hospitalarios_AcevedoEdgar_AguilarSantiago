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


<img src="img/Modelo_Conceptual _ Mermaid Chart-2025-07-31-013747.png" > 
=======


## 🎯Descripción Técnica 



El modelo conceptual fue desarrollado bajo un enfoque modular, utilizando **ObjectId** como identificadores únicos para cada documento, y estableciendo referencias explícitas entre ellos para preservar la integridad referencial del sistema. Este diseño garantiza una organización coherente y eficiente de los datos, que facilita tanto la escalabilidad como el mantenimiento.



Para optimizar la reutilización y mantener un alto grado de normalización, se implementaron arreglos referenciales en campos críticos como `hospital`, `medicamentos, paciente` y `areasEspecializadas`. Esta estrategia permite evitar la redundancia y asegura la consistencia de la información, sin comprometer el rendimiento de las consultas.



Este modelo conceptual, sustentado en un diagrama entidad-relación (ER) riguroso y coherente, constituye la base sólida para la transición hacia los modelos lógico y físico. Gracias a esta arquitectura, se evita la necesidad de rediseñar relaciones principales y se asegura un manejo robusto, flexible y eficiente de la información médica, administrativa y operativa que soporta el sistema hospitalario.




# 📖Construcción del modelo Lógico📖



Una vez definido el modelo conceptual, avanzamos hacia la construcción del modelo lógico, en el que transformamos las entidades y relaciones identificadas previamente en una estructura formal adaptada a los principios de una base de datos NoSQL, tomando en cuenta las particularidades de MongoDB.

Durante esta etapa, nos centramos en definir claramente las colecciones, los tipos de datos de cada campo y la forma en que los documentos se enlazan entre sí, mediante referencias o estructuras anidadas, según la necesidad de cada relación. El principal objetivo fue asegurar que todas las relaciones, asociaciones y restricciones planteadas fueran funcionales, eficientes y alineadas con el flujo operativo de un sistema hospitalario real.

El modelo lógico cumple así el rol de puente entre la visión abstracta del sistema (modelo conceptual) y su posterior implementación física, permitiendo anticipar posibles conflictos, optimizar consultas frecuentes y sentar las bases para una gestión robusta e íntegra de la información dentro de la plataforma hospitalaria. 



## 🎯Descripción 🎯



En el modelo lógico, estructuramos cada entidad como una colección en MongoDB, definiendo claramente sus campos, tipos de datos, referencias cruzadas y relaciones jerárquicas. Las entidades como hospitales, pacientes, personal, tratamientos, medicamentos, visitas médicas, historiales clínicos, seguros médicos y áreas especializadas fueron diseñadas como colecciones independientes, pero estrechamente conectadas entre sí a través de claves foráneas representadas por ObjectId.



El hospital es el núcleo relacional, al que se asocian otras entidades mediante referencias directas. Por ejemplo, los pacientes, medicamentos y tratamientos se relacionan directamente con el hospital asignado, lo que permite segmentar fácilmente la información por sede. El personal, aunque distribuido en varios roles, se representa lógicamente como una unidad con especialización interna, lo cual optimiza las relaciones con historiales, visitas y tratamientos.

También se definieron relaciones como la que existe entre un historial clínico y sus tratamientos, o entre una visita médica y el médico responsable, estableciendo un flujo informativo que permite reconstruir con precisión el recorrido clínico del paciente.



- Una tabla está en 1FN si cumple con los siguientes criterios:
- Todos los atributos contienen valores atómicos (indivisibles).
- No debe haber grupos repetitivos de columnas.
- Cada columna debe contener un solo valor en cada fila.



## Grafica 



<img src="img/Modelo_Logico _ Mermaid Chart-2025-07-30-045714.png" alt="Diagrama Logico" />






 

## 🎯Descripción Técnica

Desde una perspectiva técnica, el modelo lógico se construyó respetando los principios de normalización aplicables al enfoque documental. Se utilizaron referencias (DBRef o manuales con ObjectId) para conectar entidades sin duplicar información, priorizando la eficiencia en la consulta y la integridad referencial. Cada colección cuenta con un identificador único y campos definidos con tipos de datos adecuados (cadenas, números, fechas, arreglos y referencias).

Las relaciones de uno a muchos y muchos a muchos se manejaron principalmente mediante arrays de referencias, como en el caso de los tratamientos que agrupan múltiples medicamentos, o los hospitales que contienen varias áreas especializadas. Además, se incorporaron campos pensados para ser indexados en el futuro, anticipando necesidades de rendimiento en consultas frecuentes.

Las estructuras anidadas se reservaron para datos que no requieren ser consultados de forma independiente, mientras que la información crítica o relacional se gestionó por referencia. Este modelo lógico, respaldado por la gráfica ER construida con notación formal, garantiza una base sólida para el modelo físico, con una estructura clara, relaciones explícitas y una lógica que facilita tanto el desarrollo como el mantenimiento del sistema hospitalario.


 

## 🔎Normalización del Modelo Lógico🔎



En esta etapa del diseño, aplicamos el proceso de normalización al modelo lógico con el fin de garantizar la integridad, consistencia y eficiencia del almacenamiento de los datos dentro del sistema hospitalario. La normalización permite eliminar redundancias innecesarias, estructurar mejor la información y facilitar su mantenimiento a largo plazo, especialmente en un entorno con múltiples relaciones como lo es un sistema clínico.

A pesar de trabajar con una base NoSQL como MongoDB, aplicamos los principios de normalización clásicos de bases de datos relacionales como una guía metodológica que refuerza la claridad y la organización interna del modelo lógico antes de traducirlo al modelo físico documental.


 

### 1️⃣ Primera Forma Normal (1FN)



La Primera Forma Normal busca eliminar los grupos repetitivos dentro de una misma entidad, asegurando que cada campo contenga solo valores atómicos y que no existan columnas que almacenen múltiples valores o estructuras anidadas que generen ambigüedad en la lectura o manipulación de los datos. Esta etapa es fundamental, ya que establece las bases para una estructura limpia, donde cada atributo representa una sola información por fila, evitando duplicidades internas y facilitando su posterior análisis o consulta.


 

🎯**Descripción**🎯

Durante la revisión del modelo lógico, identificamos ciertas entidades que inicialmente contenían arreglos o estructuras no atómicas, como listas de tratamientos dentro de un historial clínico, medicamentos dentro de un tratamiento, o múltiples áreas asignadas directamente en el hospital. En el proceso de adaptación a la 1FN, se tomó la decisión de separar estas agrupaciones en colecciones independientes o referenciadas, garantizando que cada documento representara una única instancia de información. Por ejemplo, en lugar de almacenar todos los medicamentos como un array dentro del tratamiento, se transformaron en documentos individuales relacionados mediante ObjectId. De esta manera, cada entidad mantiene una estructura clara y alineada con los principios de atomicidad de datos.

 

🎯**Descripción Técnica**

Técnicamente, para cumplir con la Primera Forma Normal, nos aseguramos de que todos los atributos definidos en cada colección tuvieran un único valor por registro, evitando campos tipo array cuando estos representaban datos que podían crecer o cambiar dinámicamente.

Se eliminó cualquier tipo de estructura multivaluada que dificultara el acceso individual a los datos. En lugar de eso, implementamos relaciones referenciales donde era necesario, asegurando la unicidad de cada dato y la posibilidad de aplicar operaciones CRUD con mayor precisión.

Esta decisión también facilitó la implementación posterior de índices y filtros, ya que la información al estar desnormalizada por completo permite búsquedas más directas y eficientes. El paso por la 1FN nos permitió consolidar una base sólida sobre la cual aplicar las siguientes formas de normalización con mayor claridad.


 

### 2️⃣Segunda Forma Normal (2FN)



La Segunda Forma Normal tiene como objetivo eliminar la dependencia parcial de atributos respecto a claves primarias compuestas. En otras palabras, busca que todos los campos de una tabla o colección dependan completamente de la clave primaria y no solo de una parte de ella.

Este principio es especialmente útil en estructuras donde una clave está compuesta por más de un campo, situación que puede provocar redundancia de datos o inconsistencias si no se maneja adecuadamente. Aunque MongoDB no utiliza claves compuestas de forma tradicional, seguimos este principio para asegurar la cohesión lógica de cada documento y evitar atributos que dependan parcialmente de identificadores múltiples.

 

🎯**Descripción**🎯

Durante el análisis del modelo lógico, identificamos entidades donde existía dependencia parcial, especialmente en aquellos documentos donde se almacenaban atributos que estaban relacionados solo con una parte del contexto.

Por ejemplo, en las visitas médicas, se incluían datos del paciente y del médico, pero también información como la especialidad del médico o el motivo de consulta que, si bien estaban dentro del documento de visita, dependían únicamente del profesional de salud y no de la visita en sí.

En estos casos, se decidió trasladar estos atributos a sus entidades correspondientes (como personal o áreas) y mantener en la colección de visitas únicamente los campos que dependieran directamente del contexto completo de la visita. Este ajuste redujo la redundancia y facilitó una mejor trazabilidad de la información.



🎯**Descripción Técnica**

Para garantizar el cumplimiento de la Segunda Forma Normal, revisamos las entidades que incluían referencias cruzadas o información contextual duplicada. Se reestructuraron los documentos eliminando campos que no dependían completamente del identificador del documento.

Por ejemplo, la información relacionada con la especialidad médica fue centralizada en la colección de áreasEspecializadas, y los datos del médico se relacionaron mediante referencias, evitando así repetir constantemente información que podía mantenerse de forma centralizada.

En términos de MongoDB, esto se tradujo en colecciones más limpias, enfocadas en un único propósito lógico, con estructuras referenciales claras y sin ambigüedades. Esta separación de responsabilidades dentro de los documentos mejora tanto la organización como la eficiencia al momento de realizar consultas o actualizaciones parciales en el sistema hospitalario.


 

### 3️⃣Tercera Forma Normal (3FN)



Nos enfocamos en eliminar las dependencias transitivas dentro de una entidad, es decir, asegurar que todos los atributos no clave dependan exclusivamente de la clave primaria y no de otros atributos no clave.

Este principio busca evitar que la información se repita innecesariamente y mejorar la coherencia semántica del modelo. Aunque MongoDB no requiere este tipo de normalización de forma estricta debido a su naturaleza documental, aplicarla conceptualmente refuerza la integridad del diseño lógico previo a su implementación física.

 

🎯**Descripción**🎯

Al analizar el modelo lógico con base en el nuevo diagrama ER, identificamos varios casos donde se presentaban dependencias transitivas. Por ejemplo, en la entidad personal, atributos como el nombre del rol o la especialidad médica dependían de idRol e idEspecialidad respectivamente, y no del identificador principal del documento (idPersonal).

Por esta razón, estos datos fueron trasladados a colecciones independientes: roles y especialidades_medicas, permitiendo así mantener una sola fuente de verdad para cada tipo de información. Otro caso se dio en facturas, donde detalles como el método de pago o el historial de transacciones eran más adecuados para una colección como pagos, lo cual permite gestionar los abonos de forma individual y reutilizar estructuras.

Esta reestructuración eliminó la dependencia de atributos entre sí y aseguró que todas las colecciones reflejaran únicamente relaciones directas con sus claves primarias.



🎯**Descripción Técnica**

Para aplicar correctamente la Tercera Forma Normal en este modelo, fragmentamos entidades que contenían campos con dependencias indirectas, y los trasladamos a colecciones especializadas con sus respectivos ObjectId.

Así, roles, especialidades_medicas, pagos, colegiaturas y seguros_medicos se convirtieron en entidades propias, cada una relacionada por referencia con las entidades principales (personal, pacientes, facturas).

Esta separación lógica permite mantener una alta cohesión dentro de cada colección y evita la repetición de atributos como nombre del rol, tipo de seguro o nombre de la especialidad, que podrían estar presentes en múltiples documentos si no se normalizan. Desde la perspectiva técnica, este enfoque mejora la eficiencia del almacenamiento, reduce el riesgo de inconsistencias en actualizaciones y permite escalabilidad en el control de catálogos, roles y transacciones.


 

# 🏋🏻‍♂️Modelo Fisico🏋🏻‍♂️



En la etapa final del diseño de la base de datos, se realizó la transición del modelo lógico a una **implementación concreta en MongoDB**, adoptando un enfoque estructurado mediante colecciones con validación basada en jsonSchema. Esta metodología permite **garantizar la integridad estructural de los datos** desde el instante en que son insertados, asegurando la calidad y coherencia de la información almacenada en el sistema.



## 🎯Descripción🎯 

Se crearon múltiples colecciones que representan las **principales entidades del entorno hospitalario** —como hospitales, pacientes, personal, tratamientos, medicamentos, facturas y visitas—, cada una con esquemas rigurosos que especifican los campos obligatorios y los tipos de datos permitidos. Esto previene el registro de información incompleta, duplicada o inconsistente, contribuyendo a la robustez del sistema.

Adicionalmente, se definieron **colecciones complementarias** (por ejemplo, roles, especialidades_médicas, fabricantes, reacciones_adversas) que permiten clasificar y segmentar la información, facilitando tanto su trazabilidad como el mantenimiento e integración futura de nuevas funcionalidades.

La estructura propuesta favorece consultas eficientes, relaciones adecuadas entre documentos y una gestión modular y ordenada de cada componente del sistema.



## **Ejemplo de Selección o Creación de la Base de Datos**



Para definir la base de datos principal donde residirán todas las colecciones del modelo hospitalario, se utiliza el siguiente comando:

use hospitales 

Este comando selecciona la base de datos denominada sistema_hospitalario o la crea si no existe, sirviendo como núcleo para el almacenamiento y la organización integral de los datos hospitalarios.



## **Ventajas del Enfoque Adoptado**



- **Validez estructural garantizada:** El uso de validadores jsonSchema en cada colección evita errores de inserción y facilita el cumplimiento de los requisitos de negocio.

  

- **Flexibilidad y escalabilidad:** El diseño modular soporta el crecimiento de la base de datos y la expansión funcional, adaptándose a nuevas necesidades operativas.

  

- **Control y trazabilidad:** Las colecciones complementarias aseguran que la información relevante pueda ser gestionada y auditada de manera eficiente en todo momento.

  

Este esquema sienta las bases para una operación segura, eficiente y alineada con las mejores prácticas en el desarrollo de sistemas hospitalarios modernos.  

 

## Referencias



- [Bases de Datos No Relacionales](https://www.mongodb.com/resources/basics/databases/non-relational) 

  

 

# Desarrolladores

https://github.com/acevedoleonardo/PROYECTO_MONGODBS1_AcevedoEdgar_AguilarSantiago 



**Desarrollado Por: **

Este proyecto fue desarrollado en conjunto, dividiendo responsabilidades de forma clara para asegurar una construcción estructurada y completa del sistema hospitalario:

------



### Santiago Aguilar Vesga 

- Desarrollo de los **diagramas Mermaid** para representar el modelo ER.
- Encargado de la **normalización completa** del modelo hasta 3FN.
- Apoyo conjunto en la  funcionalidad general del sistema con su compañera.

### Edgar Leonardo Acevedo A.

- Responsable de la **documentación completa del proyecto**.
- Diseño de la idea base parala **estructura de la base de datos** y modelo conceptual.
- Validación de **consultas** e implementación inicial del código en MongoDB.

------

El proyecto realizado fue elaborado con apoyo contante y comunicación activa, el cual se evidencio el trabajo en equipo.  

------

## 🪪Licencia 🪪

Este proyecto está licenciado bajo la **Server Side Public License (SSPL)** . 




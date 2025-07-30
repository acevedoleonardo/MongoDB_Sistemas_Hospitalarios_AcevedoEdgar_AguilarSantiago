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





# 🛂 Requisitos del Sistema 🛂



Para el desarrollo del **Sistema Hospitalario en MongoDB**, se utiliza el siguiente entorno:



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

- mongosh 

## Paso 2: Se crea la Base de Datos 

Utilizando el comando Use se crea la base de datos y se trabaja en ella. 

**use hospitales** 



## Paso 3: Se Crea las Colecciones

Utilizando el comando db.createCollection("Nombre_Colección ")



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




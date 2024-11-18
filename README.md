# CRUD con Votaciones usando Node.js, Express y EJS  

Este proyecto es una aplicación web que permite gestionar temas de aprendizaje, implementar un sistema de votaciones y actualizar la interfaz de usuario en tiempo real. Se utiliza la arquitectura MVC y tecnologías como Node.js, Express, EJS y JavaScript puro.  

## Funcionalidades  

- **CRUD Completo**: Crear, Leer, Actualizar y Eliminar temas.  
- **Sistema de Votaciones**: Los usuarios pueden votar por los temas, incrementando el conteo de votos.  
- **Orden Dinámico**: Los temas se ordenan automáticamente según la cantidad de votos.  
- **Interfaz Amigable**: Uso de plantillas EJS para renderizar las vistas y JavaScript puro para las interacciones.  
- **Arquitectura MVC**: Separación clara entre modelos, vistas y controladores.  

---

## Tecnologías utilizadas  

- **Node.js**  
- **Express**  
- **EJS**  
- **JavaScript puro**  

---

## Requisitos previos  

- Tener instalado [Node.js](https://nodejs.org) en tu máquina.  

---

## Instalación  

1. **Clonar el repositorio:**  
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd crud

2. **Instalar dependencias**

npm install

3. **Estructura del proyecto**

crud/
├── controllers/          # Controladores de la aplicación  
│   └── temaController.js  
├── routes/               # Rutas de la aplicación  
│   └── temaRoutes.js  
├── views/                # Plantillas EJS para las vistas  
│   └── temas.ejs         # Vista de la lista de temas  
├── server.js             # Archivo principal del servidor  
└── package.json          # Dependencias y scripts  

4. **Ejecutar la apliacion:**

node server.js

5. **Abrir en el navegador**

Usa el link http://localhost:3000/temas para interactuar con la aplicación.

# Uso
## Crear un Tema
Haz clic en "Agregar Tema".
Llena el formulario con el título del tema.
Haz clic en "Guardar".

## Votar por un Tema
Haz clic en el botón "Votar" junto al tema deseado.
El contador de votos aumentará y la lista se reordenará automáticamente.

## Editar un Tema
Haz clic en "Editar" junto al tema deseado.
Modifica el título en el formulario y guarda los cambios.

## Eliminar un Tema
Haz clic en "Eliminar" junto al tema que deseas borrar.


# Detalles técnicos

1. Servidor Express
El servidor está configurado para manejar rutas básicas y solicitudes HTTP:

GET /temas: Muestra todos los temas.
POST /temas: Crea un nuevo tema.
POST /temas/
/votar: Incrementa los votos de un tema.
POST /temas/
/eliminar: Elimina un tema.

2. Vistas con EJS
Se usan plantillas EJS para renderizar páginas dinámicas basadas en los datos proporcionados por el servidor.

3. Datos en memoria
Los datos (temas y votos) están almacenados temporalmente en un archivo temas/temasController.js. Este proyecto no usa bases de datos, pero es fácilmente extensible para integrarlas.

4. JavaScript en el cliente
El lado del cliente utiliza JavaScript puro para manejar interacciones como las votaciones.


## Extensiones sugeridas
Base de datos: Integra una base de datos como MongoDB o MySQL para persistencia de datos.
Validaciones: Agrega validaciones para los formularios del cliente y del servidor.
Estilizado: Usa CSS o frameworks como Bootstrap para mejorar el diseño visual.

# Contribuciones
Si deseas contribuir a este proyecto:

Realiza un fork del repositorio.
Crea una nueva rama para tus cambios.
Envía un pull request detallando los cambios realizados.

### Autor
Anibal Cardozo

Proyecto desarrollado como ejercicio de aprendizaje para explorar las capacidades de Node.js, Express y EJS.


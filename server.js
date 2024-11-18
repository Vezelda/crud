const express = require('express');
const app = express();
const port = 3000;

// Middleware para manejar datos de formularios
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Configurar EJS
app.set('view engine', 'ejs');
app.set('views', './views');

// Importar enrutadores
const temaRouter = require('./routes/temaRoutes');

// Usar enrutadores
app.use('/temas', temaRouter);

// Página principal
app.get('/', (req, res) => {
    res.redirect('/temas');
});

// Iniciar servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});

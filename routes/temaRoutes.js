const express = require('express');
const router = express.Router();
const temaController = require('../controllers/temaController');

// Listar temas
router.get('/', temaController.listar);

// Crear un nuevo tema
router.post('/', temaController.crear);

// Votar por un tema
router.post('/:id/votar', temaController.votar);

// Ruta para ver el formulario de edición de un tema
router.get('/:id/editar', temaController.editar);

// Ruta para actualizar un tema
router.post('/:id/editar', temaController.actualizar);

// Eliminar un tema
router.post('/:id/eliminar', temaController.eliminar);



module.exports = router;

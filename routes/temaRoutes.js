const express = require('express');
const router = express.Router();
const temaController = require('../controllers/temaController');

// Listar temas
router.get('/', temaController.listar);

// Crear un nuevo tema
router.post('/', temaController.crear);

// Votar por un tema
router.post('/:id/votar', temaController.votar);

// Eliminar un tema
router.post('/:id/eliminar', temaController.eliminar);

module.exports = router;

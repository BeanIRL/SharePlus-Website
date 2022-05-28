const express = require('express');
const router = express.Router();

const mainController = require('../controllers/mainController');

router.get('/', mainController.index);

router.get('/acerca', mainController.acercaDeNosotros);
router.get('/contenidos', mainController.contentShare);
router.get('/impacto', mainController.impactoShare);
router.get('/contacto', mainController.contactoShare);



module.exports = router;
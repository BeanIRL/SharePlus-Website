const express = require('express');
const router = express.Router();

const mainController = require('../controllers/mainController');

router.get('/', mainController.index);

router.get('/acerca', mainController.acercaDeNosotros);

module.exports = router;
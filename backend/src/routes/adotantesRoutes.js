const express = require('express');
const router = express.Router();
const adotantesController = require('../controllers/adotantesController');

router.get('/', adotantesController.listar);
router.post('/', adotantesController.criar);

module.exports = router;

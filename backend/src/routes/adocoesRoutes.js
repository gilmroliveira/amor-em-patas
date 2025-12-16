const express = require('express');
const router = express.Router();
const adocoesController = require('../controllers/adocoesController');

router.get('/', adocoesController.listar);
router.post('/', adocoesController.criar);

module.exports = router;

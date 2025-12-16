const express = require('express');
const router = express.Router();
const animaisController = require('../controllers/animaisController');

router.get('/', animaisController.listar);
router.post('/', animaisController.criar);

module.exports = router;

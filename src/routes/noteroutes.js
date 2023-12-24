const express = require('express');

const router = express.Router();

const { renderFormList } = require('../controllers/NotaController');

router.get('/notas/add', renderFormList);

module.exports = router;

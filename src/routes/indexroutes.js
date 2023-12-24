const express = require('express');

const router = express.Router();

const { index, about, notas } = require('../controllers/indexController');

router.get('/', index);
router.get('/notas', notas);
router.get('/about', about);


module.exports = router;
const express = require('express');

const router = express.Router();

const { renderFormList, notas, createNote, renderUpdateNote, UpdateNote, deleteNote, renderDeleteNote } = require('../controllers/NotaController');
router.get('/notas', notas);

//insertar Note
router.get('/notas/add', renderFormList);
router.post('/notas/add', createNote);

//actualizar Nota
router.get('/notas/update/:id', renderUpdateNote);
router.put('/notas/update/:id', UpdateNote);

//eliminar Nota
router.get('/notas/delete/:id', renderDeleteNote);
router.delete('/notas/delete/:id', deleteNote);
module.exports = router;

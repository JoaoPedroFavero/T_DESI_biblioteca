`use strict`;
const express = require(`express`);
const router = express.Router();

const autoresController = require(`../controllers/autoresController`);

//GET
router.get(`/todos`, autoresController.listarAutores);
router.get(`/id/:id`, autoresController.listarAutoresPorId);

//POST
router.post(`/cadastrar`, autoresController.cadastrarAutor);

//PUT
router.put(`/editar/:id`, autoresController.editarAutor);

//DELETE
router.delete(`/deletar/:id`, autoresController.deletarAutor);

module.exports = router;
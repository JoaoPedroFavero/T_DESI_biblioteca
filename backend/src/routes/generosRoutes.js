`use strict`;
const express = require(`express`);
const router = express.Router();

const generosController = require(`../controllers/generosController`);

//GET
router.get(`/todos`, generosController.listarGeneros);
router.get(`/id/:id`, generosController.listarGenerosPorId);

//POST
router.post(`/cadastrar`, generosController.cadastrarGenero);

//PUT
router.put(`/editar/:id`, generosController.editarGenero);

//DELETE
router.delete(`/deletar/:id`, generosController.deletarGenero);

module.exports = router;
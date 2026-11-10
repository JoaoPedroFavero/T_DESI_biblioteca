`use strict`;

const express = require(`express`);
const router = express.Router();

const livrosController = require(`../controllers/livrosController`);

//GET
router.get(`/todos`, livrosController.listarLivros);
router.get(`/id/:id`, livrosController.listarLivrosPorId);
router.get(`/titulo/:titulo`, livrosController.listarLivrosPorTitulo);

//POST
router.post(`/cadastrar`, livrosController.cadastrarLivro);

//PUT
router.put(`/editar/:id`, livrosController.editarLivro);

//DELETE
router.delete(`/deletar/:id`, livrosController.deletarLivro);

module.exports = router;
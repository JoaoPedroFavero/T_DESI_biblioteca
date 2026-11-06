`use strict`;

const express = require(`express`);
const router = express.Router();
const emprestimosController = require(`../controllers/emprestimosController`);

//GET
router.get(`/todos`, emprestimosController.listarEmprestimos);
router.get(`/id/:id`, emprestimosController.listarEmprestimosPorId);

//POST
router.post(`/cadastrar`, emprestimosController.cadastrarEmprestimo);

//PUT
router.put(`/editar/:id`, emprestimosController.editarEmprestimo);

//DELETE
router.delete(`/deletar/:id`, emprestimosController.deletarEmprestimo);

module.exports = router;
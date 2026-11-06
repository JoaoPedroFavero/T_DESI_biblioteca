`use strict`;

const express = require(`express`);
const router = express.Router();

const livrosGenerosController = require(`../controllers/livrosGenerosController`);

//GET
router.get(`/todos`, livrosGenerosController.listarLivrosGeneros);
router.get(`/livro/id/:id`, livrosGenerosController.listarLivrosGenerosPorIdLivro);
router.get(`/genero/id/:id`, livrosGenerosController.listarLivrosGenerosPorIdGenero);

//POST
router.post(`/cadastrar`, livrosGenerosController.cadastrarLivroGenero);

module.exports = router;
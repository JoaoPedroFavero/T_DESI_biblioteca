`use strict`;

const express = require(`express`);
const router = express.Router();

const autoresLivrosController = require(`../controllers/autoresLivrosController`);

//GET
router.get(`/todos`, autoresLivrosController.listarAutoresLivros);
router.get(`/autor/id/:id`, autoresLivrosController.listarAutoresLivrosPorIdAutor);
router.get(`/livro/id/:id`, autoresLivrosController.listarAutoresLivrosPorIdLivro);

//POST
router.post(`/cadastrar`, autoresLivrosController.cadastrarAutorLivro);

module.exports = router;
`use strict`;
const express = require(`express`);
const router = express.Router();
const usuariosController = require(`../controllers/usuariosController`);

//GET
router.get(`/todos`, usuariosController.listarUsuarios);
router.get(`/id/:id`, usuariosController.listarUsuariosPorId);

//POST
router.post(`/cadastrar`, usuariosController.cadastrarUsuario);

//PUT
router.put(`/editar/:id`, usuariosController.editarUsuario);

//DELETE
router.delete(`/deletar/:id`, usuariosController.deletarUsuario);

module.exports = router;
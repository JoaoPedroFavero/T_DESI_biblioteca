`use strict`;

const express = require(`express`);
const app = express();
app.use(express.json());

const dotenv = require(`dotenv`);
dotenv.config();

const livrosRoutes = require(`./routes/livrosRoutes`);
const autoresRoutes = require(`./routes/autoresRoutes`);
const generosRoutes = require(`./routes/generosRoutes`);
const autoresLivrosRoutes = require(`./routes/autoresLivrosRoutes`);
const livrosGenerosRoutes = require(`./routes/livrosGenerosRoutes`);
const usuariosRoutes = require(`./routes/usuariosRoutes`);
const emprestimosRoutes = require(`./routes/emprestimosRoutes`);

app.use(`/livros`, livrosRoutes);
app.use(`/autores`, autoresRoutes);
app.use(`/generos`, generosRoutes);
app.use(`/autores-livros`, autoresLivrosRoutes);
app.use(`/livros-generos`, livrosGenerosRoutes);
app.use(`/usuarios`, usuariosRoutes);
app.use(`/emprestimos`, emprestimosRoutes);

const PORT = process.env.API_PORT;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta: http://localhost:${PORT}`);
});
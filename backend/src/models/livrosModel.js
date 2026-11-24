`use strict`;

const db = require(`../config/db`);

const selecionarTodos = async() => {
    const [resultado] = await db.query(
       `SELECT l.*, g.nome as genero, a.nome_completo as autor FROM livros as l
       INNER JOIN autores_livros as al
        ON l.id = al.livro_id
       INNER JOIN autores as a
        ON al.autor_id = a.id
       INNER JOIN livros_generos as lg
        ON l.id = lg.livro_id
       INNER JOIN generos as g
        ON lg.genero_id = g.id`
    );

    return resultado;
}

const selecionarPorId = async(id) => {
    const [resultado] = await db.query(
        `SELECT l.*, g.nome as genero, a.nome_completo as autor FROM livros as l
       INNER JOIN autores_livros as al
        ON l.id = al.livro_id
       INNER JOIN autores as a
        ON al.autor_id = a.id
       INNER JOIN livros_generos as lg
        ON l.id = lg.livro_id
       INNER JOIN generos as g
        ON lg.genero_id = g.id WHERE l.id = ?`,
        [id]
    );

    return resultado;
}

const selecionarPorTitulo = async(titulo) => {
    const [resultado] = await db.query(
        "SELECT * FROM livros WHERE titulo = ?",
        [titulo]
    );

    return resultado;
}

const criar = async(titulo, isbn, ano_publicacao, numero_paginas, sinopse) => {
    const [resultado] = await db.query(
        "INSERT INTO livros (titulo, isbn, ano_publicacao, numero_paginas, sinopse) VALUES (?, ?, ?, ?, ?)",
        [titulo, isbn, ano_publicacao, numero_paginas, sinopse]
    );

    return {
        id: resultado.insertId,
        titulo,
        isbn,
        ano_publicacao,
        numero_paginas,
        sinopse
    }
}

const editar = async(id, titulo, isbn, ano_publicacao, numero_paginas, sinopse) => {
    const [resultado] = await db.query(
        "UPDATE livros SET titulo=?, isbn=?, ano_publicacao=?, numero_paginas=?, sinopse=? WHERE id = ?",
        [titulo, isbn, ano_publicacao, numero_paginas, sinopse, id]
    );

    return {
        id, 
        titulo, 
        isbn,
        ano_publicacao,
        numero_paginas,
        sinopse
    }
}

const deletar = async(id) => {
    const [resultado] = await db.query(
        "DELETE FROM livros WHERE id = ?",
        [id]
    );

    return resultado.affectedRows;
}

module.exports = {
    selecionarTodos,
    selecionarPorId,
    selecionarPorTitulo,
    criar,
    editar,
    deletar
}
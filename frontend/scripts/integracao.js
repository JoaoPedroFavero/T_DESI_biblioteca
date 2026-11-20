const API_URL = "http://localhost:3001";
const mensagem = document.getElementById("mensagem");
const listaLivros = document.getElementById("listaLivros");

const mostrarMensagem = async(texto, erro = false) => {
    mensagem.textContent = texto;
    mensagem.textContent = erro ? erro : "sucesso";
}

const listarLivros = async() => {
    console.log(`Entrei na função`)
    try {
        console.log(`antes de fazer o fetch`)
        const response = await fetch(`${API_URL}/livros/todos`);
        console.log(`Entrei no try e puxei a response`);

        if(!response.ok){
            throw new Error(`Erro ao buscar os livros`);
        }

        const livros = await response.json();
        listaLivros.innerHTML = "";
        console.log(livros);

        if(livros.length === 0){
            listaLivros.innerHTML = `
                <tr>
                    <td colspan = "5">Nenhum livro cadastrado ainda...</td> 
                </tr>
            `;
            return;
        }

        livros.forEach((livro) => {
            listaLivros.innerHTML += `
                <tr>
                    <td>${livro.id}</td>
                    <td>${livro.titulo}</td>
                    <td>${livro.isbn}</td>
                    <td>${livro.ano_publicacao}</td>
                    <td>${livro.numero_paginas}</td>
                    <td></td>
                </tr>
            `
        });
        
    } catch(erro){
        console.log(`Estou no catch...`)
        console.log(erro);
        mostrarMensagem(erro, true);
    }
}

listarLivros();


const API_URL = "http://localhost:3001";
const mensagem = document.getElementById("mensagem");
const listaLivros = document.getElementById("lista-livros");
const selectGeneros = document.getElementById("select-generos");

const mostrarMensagem = async(texto, erro = false) => {
    mensagem.textContent = texto;
    mensagem.textContent = erro ? erro : "sucesso";
    console.log(texto);
}

const listarLivros = async() => {
    try {
        const response = await fetch(`${API_URL}/livros/todos`);

        if(!response.ok){
            throw new Error(`Erro ao buscar os livros`);
        }

        const livros = await response.json();
        listaLivros.innerHTML = "";

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
                <tr class="dados">
                    <td>${livro.id}</td>
                    <td>${livro.titulo}</td>
                    <td>${livro.autor}</td>
                    <td>${livro.genero}</td>
                    <td>${livro.ano_publicacao}</td>
                    <td id="acoes-imgs"><img id="editar-img" src="../assets/editar.png" alt="icone editar"><img id="pontos-img" src="../assets/3-pontinhos.png" alt="icone 3 pontinhos"></td>
                </tr>
            `
        });
        
    } catch(erro){
        mostrarMensagem(erro, true);
    }
}

const listarGeneros = async() => {
    try {
        const response = await fetch(`${API_URL}/generos/todos`);

        if(!response.ok){
            throw new Error(`Erro ao buscar os gêneros`);
        }

        const generos = await response.json();
        selectGeneros.innerHTML = "";

        generos.forEach((genero) => {
            selectGeneros.innerHTML += `
                <option value="${genero.id}">${genero.nome}</option>
            `;
        });

    } catch(erro){
        mostrarMensagem(erro, true);
    }
}

listarGeneros();
listarLivros();


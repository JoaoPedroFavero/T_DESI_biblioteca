`use strict`;

const carregarLayout = async(elemento, arquivo) => {
    const response = await fetch(arquivo);

    if(!response.ok){
        throw new Error(`Erro ao carregar arquivo ${arquivo}`);
    }
    //console.log(response);

    const html = await response.text();
    //console.log(html); -> o response.text retorno o codigo html que foi pego pelo fetch.

    document.querySelector(elemento).innerHTML = html;
}

document.addEventListener("DOMContentLoaded", async() =>{
    await carregarLayout(`#header`, `../layouts/header.html`);
    await carregarLayout(`#footer`, `../layouts/footer.html`);

});
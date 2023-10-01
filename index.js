const idDoProduto = "651750c57a415aed5c7e5335";
const url = `http://localhost:3000/updateProduto/${idDoProduto}`;

const form = document.querySelector('#meuFormulario');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nomeInput = document.querySelector('#campoNome').value;
    const descricaoInput = document.querySelector('#campoDescricao').value;
    const precoInput = document.querySelector('#campoPreco').value;
    const categoriaInput = document.querySelector('#campoCategoria').value;
    const estoqueInput = document.querySelector('#campoEstoque').value;

    const dadosAtualizacao = {
        nome: nomeInput,
        descricao: descricaoInput,
        preco: precoInput,
        categoria: categoriaInput,
        estoque: estoqueInput,
    };

    fetch(url, {
        method: 'PATCH', 
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(dadosAtualizacao),
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erro na solicitação de atualização (Status ${response.status})`);
            }
            return response.json();
        })
        .then(data => {
            console.log('Produto atualizado com sucesso:', data);
        })
        .catch(error => {
            console.error('Erro:', error.message);
        });
});

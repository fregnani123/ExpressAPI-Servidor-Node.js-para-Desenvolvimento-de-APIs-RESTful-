const url = 'http://localhost:3000/findProduto';
let produtos = [];

// Função para encontrar um produto por código de barras
function encontrarProdutoPorCodigo(codigo) {
    return produtos.find(produto => produto.codigoDeBarras === codigo);
}

const carrinho = [];
const codigoDeBarrasInput = document.getElementById('codigoDeBarrasInput');
const quantidadeInput = document.getElementById('quantidadeInput'); // Campo de entrada para a quantidade
const adicionarAoCarrinhoButton = document.getElementById('adicionarAoCarrinho');
const carrinhoList = document.getElementById('carrinho');
const totalCarrinhoDisplay = document.getElementById('totalCarrinho');

adicionarAoCarrinhoButton.addEventListener('click', () => {
    const codigo = codigoDeBarrasInput.value;
    const quantidade = parseInt(quantidadeInput.value); // Obtém a quantidade do campo de entrada
    const produtoSelecionado = encontrarProdutoPorCodigo(codigo);

    if (produtoSelecionado) {
        for (let i = 0; i < quantidade; i++) {
            carrinho.push(produtoSelecionado);
        }

        // Atualize a exibição do carrinho
        exibirCarrinho();

        // Limpa os campos de entrada
        codigoDeBarrasInput.value = '';
        quantidadeInput.value = '';
    } else {
        alert('Produto não encontrado');
    }
});

function exibirCarrinho() {
    // Limpe o conteúdo atual do carrinho
    carrinhoList.innerHTML = '';

    // Use um objeto para rastrear a quantidade de cada produto no carrinho
    const quantidadePorProduto = {};

    carrinho.forEach(produto => {
        const codigo = produto.codigoDeBarras;
        quantidadePorProduto[codigo] = (quantidadePorProduto[codigo] || 0) + 1;
    });

    // Percorra o objeto e exiba cada produto e sua quantidade no carrinho
    for (const codigo in quantidadePorProduto) {
        if (quantidadePorProduto.hasOwnProperty(codigo)) {
            const quantidade = quantidadePorProduto[codigo];
            const produto = encontrarProdutoPorCodigo(codigo);
            const novoItem = document.createElement('li');
            novoItem.textContent = `${produto.nome} - ${quantidade}x $${(produto.preco * quantidade).toFixed(2)}`;
            carrinhoList.appendChild(novoItem);
        }
    }

    // Calcule e exiba o total
    const total = Object.values(quantidadePorProduto).reduce((acc, quantidade) => {
        const codigo = Object.keys(quantidadePorProduto).find(codigo => quantidadePorProduto[codigo] === quantidade);
        const produto = encontrarProdutoPorCodigo(codigo);
        return acc + (produto.preco * quantidade);
    }, 0);
    totalCarrinhoDisplay.textContent = total.toFixed(2);
}

// Aqui, você faz a chamada à API para obter os produtos
fetch(url)
    .then((response) => response.json())
    .then(data => {
        produtos = data; // Substitui o array de produtos local pelos dados da API
        console.log(produtos);
    })
    .catch(error => {
        console.error('Erro ao carregar produtos da API: ' + error);
    });

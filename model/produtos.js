const mongoose = require('mongoose');

const produtoSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
    },
    descricao: {
        type: String,
        required: true,
    },
    preco: {
        type: Number,
        required: true,
    },
    categoria: {
        type: String,
        required: true,
    },
    estoque: {
        type: Number,
        required: true,
    },
    codigoDeBarras: {
        type: Number,
        required: true,
    },
});

const detalhesVenda = new mongoose.Schema({

    carrinho: {
        type: String,
        required: true,
    },
    cliente: {
        type: String,
        requerid: true,
    },
    dateVenda: {
        type: Date,
        requerid: true,
    },
    dinheiroRecebido: {
        type: Number,
        required: true,
    },
    formaPagamento: {
        type: String,
        requerid: true,
    },
    total: {
        type: Number,
        required: true,
    }
}
)

module.exports = mongoose.model('Detalhes de Venda', detalhesVenda, 'Detalhes de Venda')
module.exports = mongoose.model('Produto', produtoSchema, 'Produtos');





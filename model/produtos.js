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

const detalhesVendaSchema = new mongoose.Schema({
    carrinho: {
        type: Array,
        required: true,
    },
    cliente: {
        type: String,
        required: true,
    },
    dateVenda: {
        type: Date,
        required: true,
    },
    dinheiroRecebido: {
        type: Number,
        required: true,
    },
    formaPagamento: {
        type: String,
        required: true,
    },
    total: {
        type: Number,
        required: true,
    }
});

// Exporte cada modelo separadamente
module.exports.Produto = mongoose.model('Produto', produtoSchema, 'Produtos');
module.exports.DetalhesVenda = mongoose.model('DetalhesVenda', detalhesVendaSchema, 'Detalhes de Venda');

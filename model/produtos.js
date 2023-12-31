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

const cadastrarClienteSchema = new mongoose.Schema({
    cliente: {
        type: String,
        required: true,
    },
    cpfFake: {
        type: String,
        required: true,
    },

    rgFake: {
        type: String,
        required: true,
    },
    nascimento: {
        type: Date,
        required: true,
    },
    endereco: {
        type: String,
        required: true,
    },
    numero: {
        type: String,
        required: true,
    },
    bairro: {
        type: String,
        required: true,
    },
    cidade: {
        type: String,
        required: true,
    },
    
    uf: {
        type: String,
        required: true,
    },

    fone: {
        type: String,
        required: true, 
    },
    email: {
        type: String,
        required: true,
    },
    ocupacao: {
        type: String,
        required: true,
    },

}
   
);

// Exporte cada modelo separadamente
module.exports.Produto = mongoose.model('Produto', produtoSchema, 'Produtos');
module.exports.DetalhesVenda = mongoose.model('DetalhesVenda', detalhesVendaSchema, 'Detalhes de Venda');
module.exports.cadastrarCliente = mongoose.model('Cliente', cadastrarClienteSchema, 'Cadastro de Cliente');

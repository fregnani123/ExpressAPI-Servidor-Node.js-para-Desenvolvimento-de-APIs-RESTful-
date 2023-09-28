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
});

const Produto = mongoose.model('Produto', produtoSchema, 'Produtos');

export default Produto
const Produto = require('../model/produtos.js') ;


const controllers = {

    findProduto: async (req, res) => {
        try {
            const produtos = await Produto.find();
            return res.json(produtos);
        } catch (error) {
            // Lide com erros aqui
            console.error('Erro ao buscar produtos:', error);
            return res.status(500).json({ error: 'Erro ao buscar produtos' });
        }
    }
};

module.exports = controllers;
const ProdutoModel = require('../model/produtos.js') ;


const controllers = {

    findProduto: async (req, res) => {
        try {
            const produtos = await ProdutoModel.find();
            return res.json(produtos);
        } catch (error) {
            // Lide com erros aqui
            console.error('Erro ao buscar produtos:', error);
            return res.status(500).json({ error: 'Erro ao buscar produtos' });
        }
    },

    findOne: async(req, res) =>{
       
        try {
        
        } catch (error) {
            // Lide com erros aqui
            console.error('Erro ao buscar produtos:', error);
            return res.status(500).json({ error: 'Erro ao buscar produtos' }); 
    }

    },

    createProduto: async (req, res) => {
          const newProduto = req.body;
        try {
            const produto = await ProdutoModel.create(newProduto);
            
            res.json(produto);

        } catch(error) {
            // Lide com erros aqui
            console.error('Erro ao buscar produtos:', error);
            return res.status(500).json({ error: 'Erro ao buscar produtos' });
        }
    },


};

module.exports = controllers;
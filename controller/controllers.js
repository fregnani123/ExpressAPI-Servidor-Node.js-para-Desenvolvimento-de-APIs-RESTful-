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

    findOne: async (req, res) => {
        const partialNomeProduto = req.params.nome; // Nome parcial a ser pesquisado
        try {
            const regex = new RegExp(partialNomeProduto, 'i'); // 'i' para fazer a busca ser case-insensitive
            const findProduto = await ProdutoModel.findOne({ nome: regex });
            res.json(findProduto);
        } catch (error) {
            console.error('Erro ao buscar produtos:', error);
            return res.status(500).json({ error: 'Erro ao buscar produtos' });
        }
    },


    createDetalheVenda : async (req, res) => {
        const newVenda = req.body; 
        try {
            const detalhesVenda = await detalhesVenda.create(newVenda);
            res.json(detalhesVenda)
        } catch (error) {

            console.error('Erro ao criar detalhes vendas:', error);
            return res.status(500).json({ error: 'Erro ao buscar  a venda' });
        }
   },


    createProduto: async (req, res) => {
          const newProduto = req.body;
        try {
            const produto = await ProdutoModel.create(newProduto);
            
            res.json(produto);

        } catch(error) {
           
            console.error('Erro ao buscar produtos:', error);
            return res.status(500).json({ error: 'Erro ao buscar produtos' });
        }
    },
  
    deleteProduto: async (req, res) => {
        const id = req.params.id;
        try {
            const produto = await ProdutoModel.deleteOne({_id: id });
            res.json(produto);

        } catch (error) {
            console.error('Erro ao buscar produtos:', error);
            return res.status(500).json({ error: 'Erro ao buscar produtos' });
        }
    },

    updateProduto: async (req, res) => {

        const id = req.params.id;
        const { nome, descricao, preco, categoria, estoque } = req.body

        const updateProduto = { 
            nome,
            descricao,
            preco,
            categoria,
            estoque,
        }
        
        try {
            const produto = await ProdutoModel.updateOne({ _id: id }, updateProduto);
            res.json(updateProduto);

        } catch (error) {
            console.error('Erro ao buscar produtos:', error);
            return res.status(500).json({ error: 'Erro ao buscar produtos' });
        }
    },

};

module.exports = controllers;
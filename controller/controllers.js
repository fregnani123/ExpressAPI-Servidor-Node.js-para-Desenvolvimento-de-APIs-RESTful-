const { Produto, DetalhesVenda,  cadastrarCliente} = require('../model/produtos.js');

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
    },

    findOne: async (req, res) => {
        const partialNomeProduto = req.params.nome; 
        try {
            const regex = new RegExp(partialNomeProduto, 'i'); 
            const findProduto = await Produto.findOne({ nome: regex });
            res.json(findProduto);
        } catch (error) {
            console.error('Erro ao buscar produtos:', error);
            return res.status(500).json({ error: 'Erro ao buscar produtos' });
        }
    },

    createDetalheVenda : async (req, res) => {
        const newVenda = req.body; 
        try {
            const detalhesVenda = await DetalhesVenda.create(newVenda);
            res.json(detalhesVenda)
        } catch (error) {

            console.error('Erro ao criar detalhes vendas:', error);
            return res.status(500).json({ error: 'Erro ao criar detalhes de venda' });
        }
    },
    
    detalhes: async (req, res) => {
        try {
            const detalhes = await DetalhesVenda.find()
            return res.json(detalhes);
        } catch (error) {

            console.error('Erro ao criar detalhes vendas:', error);
            return res.status(500).json({ error: 'Erro ao buscar  a venda' });
        }
    },

    createProduto: async (req, res) => {
          const newProduto = req.body;
        try {
            const produto = await Produto.create(newProduto);
            
            res.json(produto);

        } catch(error) {
           
            console.error('Erro ao buscar produtos:', error);
            return res.status(500).json({ error: 'Erro ao buscar produtos' });
        }
    },
  
    deleteProduto: async (req, res) => {
        const codigoDeBarras = req.params.codigoDeBarras;
        try {
            const produto = await Produto.deleteOne({codigoDeBarras: codigoDeBarras });
            res.json(produto);

        } catch (error) {
            console.error('Erro ao buscar produtos:', error);
            return res.status(500).json({ error: 'Erro ao buscar produtos' });
        }
    },

    updateProduto: async (req, res) => {

        const codigoDeBarras = req.params.codigoDeBarras;
        const { nome, descricao, preco, categoria ,estoque, } = req.body

        const updateProduto = {
            nome: nome,
            descricao: descricao,
            preco: preco,
            categoria: categoria,
            estoque:estoque,
        }
        
        try {
            const produto = await Produto.updateOne({ codigoDeBarras: codigoDeBarras }, updateProduto);
            res.json(produto);

        } catch (error) {
            console.error('Erro ao buscar produtos:', error);
            return res.status(500).json({ error: 'Erro ao buscar produtos' });
        }
    },

    createNewCliente: async (req, res) => {
        const createCliente = req.body;
        try {
            const novoCliente = await  cadastrarCliente.create(createCliente);
            res.json(novoCliente);
        } catch (error) { 
            console.error('Erro ao criar novo cliente:', error);
            return res.status(500).json({ error: 'Erro ao criar novo cliente' });
        }
    },

    buscarCliente: async (req, res) => {
        try {
            const cliente = await cadastrarCliente.find()
           return res.json(cliente) } catch (error) {

            console.error('Erro ao criar detalhes vendas:', error);
            return res.status(500).json({ error: 'Erro ao buscar  a venda' });
        }
        
    }


};


module.exports = controllers;
import express from 'express';
const app = express()
import { configDotenv } from 'dotenv';
configDotenv({ path: './.env' });
import mongoose from 'mongoose';
import cors from 'cors';


app.use(express.json())
app.use(cors())

const PORT = process.env.PORT;
const PASSWORD = process.env.PASSWORD


app.listen(PORT, () => {
    console.log(`Servidor rodando na PORT:${PORT}`)
})

mongoose.connect(PASSWORD, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Banco de dados conectado')
}).catch((error) => {
    console.log(error)
})

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
        required:true,
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

const Produto = mongoose.model('Produto', produtoSchema,'Produtos');


app.get('/', async (req, res) => {
    try {
        const produtos = await Produto.find();
        return res.json(produtos);
    } catch (error) {
        console.error('Erro ao buscar produtos:', error);
        return res.status(500).json({ error: 'Erro ao buscar produtos' });
    }
});

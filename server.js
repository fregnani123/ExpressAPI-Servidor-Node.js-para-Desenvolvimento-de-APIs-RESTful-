import express from 'express';
const app = express()
import { configDotenv } from 'dotenv';
configDotenv({ path: './.env' });
import mongoose from 'mongoose';
import apiRouter from './router/routes'

app.use(apiRouter)

const PORT = process.env.PORT;
const PASSWORD = process.env.PASSWORD

app.get('/', (req, res) => {
    res.send('oi')
})

app.listen(PORT, () => {
    console.log(`Servidor rodando na PORT:${PORT}`)
})

mongoose.connect(PASSWORD).then(() => {
    console.log('Banco de dados conectado')
}).catch((error) => {
    console.log(error)
})
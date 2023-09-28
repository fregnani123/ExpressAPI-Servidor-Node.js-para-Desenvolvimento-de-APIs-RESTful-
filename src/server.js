import express from 'express';
const app = express()
import { configDotenv } from 'dotenv';
configDotenv({ path: './.env' });
import mongoose from 'mongoose';
import cors from 'cors';
import routes from './routes.js'


app.use(express.json())
app.use(cors());
app.use(routes);

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
});






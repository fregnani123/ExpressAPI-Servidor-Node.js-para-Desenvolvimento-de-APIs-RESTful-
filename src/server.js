const express = require('express');
const app = express();
require('dotenv').config({ path: './.env' });
const mongoose = require('mongoose');
const cors = require('cors');
const Routes = require('../Router/routes');


app.use(express.json())
app.use(cors());
app.use('/', Routes);

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






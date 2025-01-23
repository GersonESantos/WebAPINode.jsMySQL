require('dotenv').config();
const express = require('express');

const db = require('./db');

const app = express();

app.use(express.json());

app.get('/produtos/:id', async (req, res) => {
    try {
    const id = parseInt(req.params.id);
    const produto = await db.selectprodutosById(id);
    if (produto) {
        res.json(produto);
    } else {
        res.status(404).json({ message: 'Produto não encontrado' });
    }
    } catch (err) {
        next(err);
    }});

app.get('/produtos', async (req, res) => {
        const results = await db.selectprodutos();
        res.json(results);
    });

app.get('/', (req, res, next) => {
    res.json({ message: 'Rodando no Ar' });
});

app.listen(process.env.PORT, () => {;
    console.log(`Server is running on port ${process.env.PORT}`);
});

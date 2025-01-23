require('dotenv').config();
const express = require('express');

const db = require('./db');

const app = express();

app.use(express.json());

app.get('/produtosById/:cod', async (req, res) => {
    try {
        const cod = parseInt(req.params.cod);
        const results = await db.selectprodutosById(cod);
        if (results) {
            res.json(results);
        } else {
            res.status(404).json({ message: 'Produto não encontrado' });
        }
    } catch (err) {
        res.status(500).json({ message: 'Erro ao buscar produto', error: err.message });
    }
});

app.get('/customers/:id', async (req, res, next) => {
    try {
        const id = parseInt(req.params.id);
        const customer = await db.selectCustomersById(id);
        if (customer) {
            res.json(db.selectCustomersById(id));
        } else {
            res.status(404).json({ message: 'Customer not found' });
        }
    } catch (err) {
        next(err);
    }
}
);



app.get('/produtos', async (req, res) => {
    try {
        const results = await db.selectprodutos();
        res.json(results);
    } catch (err) {
        res.status(500).json({ message: 'Erro ao buscar produtos', error: err.message });
    }
});

app.get('/', (req, res, next) => {
    res.json({ message: 'Rodando no Ar' });
});

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
require('dotenv').config();
const express = require('express');

const db = require('./db1');


const app = express();

app.use(express.json());

app.delete('/clientes/:id', async (req, res, next) => {
    try {
        const id = parseInt(req.params.id);
        const cliente = db.selectclientesById(id);
        if (cliente) {
            db.deletecliente(id);
            res.json(cliente);
        } else {
            res.status(404).json({ message: 'cliente not found' });
        }
    } catch (err) {
        next(err);
    }
});

app.patch('/clientes/:id', async (req, res, next) => {
    try {
        const id = parseInt(req.params.id);
        const cliente = req.body;
        const result = await db.updatecliente(id, cliente);
        if (result) {
            res.json(result);
        } else {
            res.status(404).json({ message: 'cliente not found' });
        }
    } catch (err) {
        next(err);
    }
});

app.post('/clientes', async (req, res, next) => {
    try {
        const cliente = req.body;
        const result = await db.insertcliente(cliente);
        res.json(result);
    } catch (err) {
        next(err);
    }
});

app.get('/clientes/:id', async (req, res, next) => {
    try {
        const id = parseInt(req.params.id);
        const cliente = await db.selectclientesById(id);
        if (cliente) {
            res.json(db.selectclientesById(id));
        } else {
            res.status(404).json({ message: 'cliente not found' });
        }
    } catch (err) {
        next(err);
    }
}
);

app.get('/clientes', async (req, res, next) => {
    try {
        const clientes = await db.selectclientes();
        res.json(clientes);
    } catch (err) {
        next(err);
    }
});

app.get('/', (req, res, next) => {
    res.json({ message: 'Rodando no Ar' });
});

app.listen(process.env.PORT, () => {;
    console.log(`Server is running on port ${process.env.PORT}`);
});

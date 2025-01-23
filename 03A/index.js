require('dotenv').config();
const express = require('express');

const db = require('./db');


const app = express();

app.use(express.json());

app.delete('/customers/:id', async (req, res, next) => {
    try {
        const id = parseInt(req.params.id);
        const customer = db.selectCustomersById(id);
        if (customer) {
            db.deleteCustomer(id);
            res.json(customer);
        } else {
            res.status(404).json({ message: 'Customer not found' });
        }
    } catch (err) {
        next(err);
    }
});

app.patch('/customers/:id', async (req, res, next) => {
    try {
        const id = parseInt(req.params.id);
        const customer = req.body;
        const result = await db.updateCustomer(id, customer);
        if (result) {
            res.json(result);
        } else {
            res.status(404).json({ message: 'Customer not found' });
        }
    } catch (err) {
        next(err);
    }
});

app.post('/customers', async (req, res, next) => {
    try {
        const customer = req.body;
        const result = await db.insertCustomer(customer);
        res.json(result);
    } catch (err) {
        next(err);
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

app.get('/customers', async (req, res, next) => {
    try {
        const customers = await db.selectCustomers();
        res.json(customers);
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

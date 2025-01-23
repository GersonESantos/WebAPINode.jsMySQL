const customers=[
    { id: 1, name: 'João', age: 30, email: 'joao@gmail'  },
    { id: 2, name: 'Maria', age: 25, email: 'maria@gmail' },
    { id: 3, name: 'José', age: 40, email: 'jose@gmail'  },
    { id: 4, name: 'Pedro', age: 35, email: 'pedro@gmail' },
    { id: 5, name: 'Paulo', age: 22, email: 'paulo@gmail' },
]; // Array de clientes


function selectCustomers() {
    return customers;
}

function selectCustomersById(id) {
    return customers.find(customer => customer.id === id);
}

function insertCustomer(customer) {
    customers.push(customer);
    return customer;
}

function updateCustomer(id, customer) {
    const index = customers.findIndex(customer => customer.id === id);
    if (index !== -1) {
        customers[index] = customer;
        return customer;
    } else {
        return null;
    }
}   

function deleteCustomer(id) {
    const index = customers.findIndex(customer => customer.id === id);
    if (index !== -1) {
        customers.splice(index, 1);
    }
}   

module.exports = {  selectCustomers,
                    selectCustomersById,
                    insertCustomer,
                    updateCustomer,
                    deleteCustomer
 };
  


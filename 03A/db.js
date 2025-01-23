const clientes=[
    { id: 1, name: 'João', age: 30, email: 'joao@gmail'  },
    { id: 2, name: 'Maria', age: 25, email: 'maria@gmail' },
    { id: 3, name: 'José', age: 40, email: 'jose@gmail'  },
    { id: 4, name: 'Pedro', age: 35, email: 'pedro@gmail' },
    { id: 5, name: 'Paulo', age: 22, email: 'paulo@gmail' },
]; // Array de clientes


function selectclientes() {
    const res =clientes.query('SELECT * FROM cliente');    
    return clientes;
}

function selectclientesById(id) {
    return clientes.find(cliente => cliente.id === id);
}

function insertcliente(cliente) {
    clientes.push(cliente);
    return cliente;
}

function updatecliente(id, cliente) {
    const index = clientes.findIndex(cliente => cliente.id === id);
    if (index !== -1) {
        clientes[index] = cliente;
        return cliente;
    } else {
        return null;
    }
}   

function deletecliente(id) {
    const index = clientes.findIndex(cliente => cliente.id === id);
    if (index !== -1) {
        clientes.splice(index, 1);
    }
}   

module.exports = {  selectclientes,
                    selectclientesById,
                    insertcliente,
                    updatecliente,
                    deletecliente
 };
  


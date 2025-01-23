// CREATE DATABASE projeto;

// CREATE TABLE cliente (
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     nome VARCHAR(100) NOT NULL,
//     idade INT NOT NULL,
//     email VARCHAR(150)
// );

const mysql = require('mysql2');
// Conexão com o banco de dados
const Conexao = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Gabibi89*',
    database: 'projeto'
}); 
// Conectar
Conexao.connect(function(err){
    if(err) throw err;
    console.log('Conectado com sucesso!');
}
);
// Exportar módulo
module.exports = Conexao;

const clientes=[
    { id: 1, nome: 'João', idade: 30, email: 'joao@gmail'  },
    { id: 2, nome: 'Maria', idade: 25, email: 'maria@gmail' },
    { id: 3, nome: 'José', idade: 40, email: 'jose@gmail'  },
    { id: 4, nome: 'Pedro', idade: 35, email: 'pedro@gmail' },
    { id: 5, nome: 'Paulo', idade: 22, email: 'paulo@gmail' },
]; // Array de clientes


function selectclientes() {
        
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
  



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



function selectclientes(res) {
    // SQL
    let sql = '';
    sql = 'SELECT * FROM produtos ORDER BY RAND()';
    Conexao.query(sql, function(erro, retorno){
        if (erro) throw erro;
        res.render('lista', {produtos:retorno});    
    });

function selectclientesById(id) {
    return clientes.find(cliente => cliente.id === id);
}
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
  
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
});

function selectprodutos() {
    return new Promise((resolve, reject) => {
        Conexao.query('SELECT * FROM produtos', (err, results) => {
            if (err) {
                return reject(err);
            }
            resolve(results);
        });
    });
}

// Exportar módulo
module.exports = {  
    selectprodutos
    // outras funções...
};
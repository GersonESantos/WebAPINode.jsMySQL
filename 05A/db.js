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

function selectprodutosById(cod) {
    return new Promise((resolve, reject) => {
        Conexao.query('SELECT * FROM produtos WHERE codigo = ?', [cod], (err, results) => {
            if (err) {
                return reject(err);
            }
            if (results.length > 0) {
                resolve(results[0]);
            } else {
                resolve(null);
            }
        });
    });
}

module.exports = {  
    selectprodutos,
    selectprodutosById,
    // outras funções...
};
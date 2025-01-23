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

// Função para selecionar cliente por ID
function selectclientes() {
    const sql = 'SELECT * FROM produtos';
    Conexao.query(sql, [id], function(err, results) {
        if (err) {
            return callback(err, null);
        }
        return callback(null, results[0]);
    });
}

// Exportar módulo
module.exports = {  
    selectclientes,
    // outras funções...
};
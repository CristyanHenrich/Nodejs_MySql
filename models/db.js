const Sequelize = require('sequelize');

const sequelize = new Sequelize("system_drtech", "root", "", {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate()
.then(function(){
    console.log("Conexao com o banco de dados realizada com sucesso!");
}).catch(function(){
    console.log("Erro conexao com o banco de dados nao realizada com sucesso!");
});

module.exports = sequelize;
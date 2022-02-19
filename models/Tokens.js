const Sequelize = require('sequelize');
const db = require('./db');

const Tokens = db.define('tokens', {
    ID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    TOKEN: {
        type: Sequelize.STRING(2000),
        allowNull: false
    }
});



//Criar a tabela tokens caso ela nao exita
//User.sync();

//Verifica se a tabela do sequelize esta diferente da tabela conecatada e adiciona ou modifica a tabela completando-a
//User.sync({ alter: true })

module.exports = Tokens;
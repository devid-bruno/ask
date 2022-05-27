const sequelize = require('sequelize');

const connect = new sequelize('ask', 'root', 'root',{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connect;
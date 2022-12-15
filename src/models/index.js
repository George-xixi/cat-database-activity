// In models/index.js add this code:
const { SequelizeScopeError } = require('sequelize');
const Sequelize = require('sequelize');
const CatModel = require('./cats');


const setUpDatabase = () => {
    const connection = new Sequelize("cat-db", "postgres", "password", {
    host: "localhost",
    port: 5432,
    dialect: "postgres"
    })

    const Cat = CatModel(connection, Sequelize);

    connection.sync({alter: true});

    return { Cat };
}

module.exports = setUpDatabase();
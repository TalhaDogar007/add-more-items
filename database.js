
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('databasename', 'postgres', 'password', {
    host: 'localhost',
    dialect: 'postgres'
  });

  module.exports = sequelize;

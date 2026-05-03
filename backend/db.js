const { Sequelize } = require('sequelize');
require('dotenv').config();

// Connect to PostgreSQL database using user-provided credentials
const sequelize = new Sequelize('trip.pro', 'postgres', '2007', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false, // Set to console.log to see SQL queries
});

module.exports = sequelize;

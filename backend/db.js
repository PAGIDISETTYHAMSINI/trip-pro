const { Sequelize } = require('sequelize');
require('dotenv').config();

// Connect to PostgreSQL database using environment variables for security and cloud deployment
const sequelize = process.env.DATABASE_URL 
  ? new Sequelize(process.env.DATABASE_URL, {
      dialect: 'postgres',
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false
        }
      },
      logging: false,
    })
  : new Sequelize('trip.pro', 'postgres', '2007', {
      host: 'localhost',
      dialect: 'postgres',
      logging: false,
    });

module.exports = sequelize;

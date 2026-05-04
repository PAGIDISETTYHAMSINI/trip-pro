const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const User = require('./User');

const Booking = sequelize.define('Booking', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  destinationId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  destinationName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  totalCost: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  days: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: 'PAID', // Simulated payment success
  },
  itineraryDetails: {
    type: DataTypes.JSON, // Stores the exact JSON breakdown of the itinerary
    allowNull: false,
  },
  schedule: {
    type: DataTypes.JSON, // Stores the day-by-day detailed schedule
    allowNull: true,
  }
});

// Relationships
User.hasMany(Booking, { foreignKey: 'userId' });
Booking.belongsTo(User, { foreignKey: 'userId' });

module.exports = Booking;

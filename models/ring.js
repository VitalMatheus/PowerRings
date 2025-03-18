'use strict';

const Sequelize = require('sequelize');
const {
  Model
} = require('sequelize');
const sequelize = require('../config/database');

module.exports = sequelize.define('Rings', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  name: {
    type: Sequelize.STRING
  },
  power: {
    type: Sequelize.STRING
  },
  carrier: {
    type: Sequelize.STRING
  },
  forgedBy: {
    type: Sequelize.ENUM('elfos', 'anões', 'homens', 'sauron')
  },
  image: {
    type: Sequelize.STRING
  },
  createdAt: {
    allowNull: false,
    type: Sequelize.DATE
  },
  updatedAt: {
    allowNull: false,
    type: Sequelize.DATE
  }
})
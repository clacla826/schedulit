const Sequelize = require('sequelize');
const db = require('../db');

const Service = db.define('service', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  image: {
    type: Sequelize.STRING,
    dfaultValue:
    'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg'
  },
  price: {
    type: Sequelize.INTEGER
  },
  description: {
    type: Sequelize.TEXT
  },
  isAvailable: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
})

module.exports = Service;

const Sequelize = require('sequelize');
const db = require('../db')

const Property = db.define('property', {
    address: {
        type: Sequelize.STRING,
        allowNull: false
    },
    city: {
        type: Sequelize.STRING,
        allowNull: false
    },
    state: {
        type: Sequelize.STRING,
        allowNull: false
    },
    zip: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    buildingType: {
        type: Sequelize.ENUM('Apartment', 'House', 'Commercial Building')
    },
    size: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    bedrooms: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    bathrooms: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

module.exports = Property;

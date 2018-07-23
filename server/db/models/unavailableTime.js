const Sequelize = require('sequelize');
const db = require('../db');

const UnavailableTime = db.define('unavailableTime', {
    date: {
        type: Sequelize.DATE
    },
    startTime: {
        type: Sequelize.TIME
    },
    finishTime: {
        type: Sequelize.TIME
    }
})

module.exports = UnavailableTime;

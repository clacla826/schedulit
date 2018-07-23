const Sequelize = require("sequelize");
const db = require("../db");

const Appointment = db.define("appointment", {
  photographer: {
    type: Sequelize.STRING,
    allowNull: false
  },
  date: {
    type: Sequelize.DATE,
    allowNull: false
  },
  startTime: {
    type: Sequelize.STRING,
    allowNull: false
  },
  finishTime: {
    type: Sequelize.STRING,
    allowNull: false
  },
  status: {
    type: Sequelize.ENUM("Booked", "Canceled")
  },
  price: {
    type: Sequelize.INTEGER
  },
  paid: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  paymentOption: {
    type: Sequelize.ENUM("Credit", "Paypal")
  },
  serviceIds: {
    type: Sequelize.ARRAY(Sequelize.INTEGER),
    defaultValue: null
  }
});

module.exports = Appointment;

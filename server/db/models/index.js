const User = require('./user')
const Appointment = require('./appointment')
const Service = require('./service')
const Property = require('./property')
const UnavailableTime = require('./unavailableTime')

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */



User.hasMany(Appointment, {foreignKey: 'bookerId'})
User.hasMany(Property, {foreignKey: 'bookerId'})
User.hasMany(UnavailableTime)

// Appointment.belongsTo(User, {foreignKey: 'bookerId'})
Appointment.belongsTo(Property)

//Service.hasMany(Appointment)


module.exports = {
  User,
  Appointment,
  Service,
  Property,
  UnavailableTime
}

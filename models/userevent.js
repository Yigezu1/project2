// Creating our Event model
module.exports = function(sequelize) {
  const Userevent = sequelize.define("Userevent");
  User.belongsToMany(Event, { through: Userevent });
  Event.belongsToMany(User, { through: Userevent });

  return Userevent;
};

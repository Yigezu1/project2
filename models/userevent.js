// Creating our Event model
module.exports = function(sequelize) {
  const Userevent = sequelize.define("Userevent");
  // User.belongsToMany(Event, { through: Userevent });
  // Event.belongsToMany(User, { through: Userevent });
  Userevent.associate = function(models) {
    Userevent.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  Userevent.associate = function(models) {
    Userevent.belongsTo(models.Event, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Userevent;
};

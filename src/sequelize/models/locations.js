
module.exports = (sequelize, DataTypes) => {
  const Locations = sequelize.define('Locations', {
    name: DataTypes.STRING,
  }, {});
  Locations.associate = (models) => {
    Locations.hasMany(models.Projects, {
      as: 'projects',
      foreignKey: 'location_id',
    });
  };
  return Locations;
};

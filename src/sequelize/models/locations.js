
module.exports = (sequelize, DataTypes) => {
  const Location = sequelize.define('Location', {
    name: DataTypes.STRING,
  }, {});
  Location.associate = (models) => {
    Location.hasMany(models.Projects, {
      as: 'projects',
      foreignKey: 'location_id',
    }, { onDelete: 'cascade' });
  };
  return Location;
};

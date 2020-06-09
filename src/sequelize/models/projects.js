
module.exports = (sequelize, DataTypes) => {
  const Projects = sequelize.define('Projects', {
    name: DataTypes.STRING,
    status: DataTypes.STRING,
    amount_spent: DataTypes.STRING,
    priority: DataTypes.STRING,
  }, {});
  Projects.associate = (models) => {
    Projects.hasMany(models.ProjectItem, {
      as: 'subProjects',
      foreignKey: 'project_id',
    }, { onDelete: 'cascade' });
    Projects.belongsTo(models.Location, {
      as: 'location',
      foreignKey: 'location_id',
    });
  };
  return Projects;
};

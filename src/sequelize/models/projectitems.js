
module.exports = (sequelize, DataTypes) => {
  const ProjectItem = sequelize.define('ProjectItem', {
    name: DataTypes.STRING,
    status: DataTypes.STRING,
    amount_spent: DataTypes.STRING,
    priority: DataTypes.STRING,
  }, {});
  ProjectItem.associate = (models) => {
    ProjectItem.belongsTo(models.Projects, {
      as: 'project',
      foreignKey: 'project_id',
    });

    ProjectItem.hasMany(models.Accounts, {
      as: 'account',
      foreignKey: 'projectItem_id',
    });
  };
  return ProjectItem;
};

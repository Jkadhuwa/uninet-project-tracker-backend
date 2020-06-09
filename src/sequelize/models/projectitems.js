
module.exports = (sequelize, DataTypes) => {
  const ProjectItem = sequelize.define('ProjectItem', {
    name: DataTypes.STRING,
    status: DataTypes.STRING,
    amount_spent: DataTypes.STRING,
    priority: DataTypes.STRING,
  }, {});
  ProjectItem.associate = (models) => {
    ProjectItem.hasMany(models.Accounts, {
      as: 'account',
      foreignKey: 'projectItem_id',
    }, { onDelete: 'cascade' });
  };
  return ProjectItem;
};

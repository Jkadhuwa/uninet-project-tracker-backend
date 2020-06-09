
module.exports = (sequelize, DataTypes) => {
  const Account = sequelize.define('Accounts', {
    projected_amount: DataTypes.STRING,
    dispersed_amount: DataTypes.STRING,
    dispersed_date: DataTypes.STRING,
  }, {});
  Account.associate = (models) => {
    Account.belongsTo(models.ProjectItem, {
      as: 'project_item',
      foreignKey: 'projectItem_id',
    });
  };
  return Account;
};


module.exports = (sequelize, DataTypes) => {
  const Accounts = sequelize.define('Accounts', {
    projected_amount: DataTypes.STRING,
    dispersed_amount: DataTypes.STRING,
    dispersed_date: DataTypes.STRING,
  }, {});
  Accounts.associate = () => {
    // associations can be defined here
  };
  return Accounts;
};

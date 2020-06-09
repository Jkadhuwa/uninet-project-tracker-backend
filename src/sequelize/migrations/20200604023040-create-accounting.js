
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Accountings', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    projected_amount: {
      type: Sequelize.STRING,
    },
    dispersed_amount: {
      type: Sequelize.STRING,
    },
    dispersed_date: {
      type: Sequelize.STRING,
    },
    projectItem_id: {
      type: Sequelize.INTEGER,
      references: {
        model: 'ProjectItems',
        key: 'id',
      },
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),
  down: (queryInterface) => queryInterface.dropTable('Accountings'),
};

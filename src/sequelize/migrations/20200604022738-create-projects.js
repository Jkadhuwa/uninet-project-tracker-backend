
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Projects', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    name: {
      type: Sequelize.STRING,
    },
    status: {
      type: Sequelize.STRING,
    },
    amount_spent: {
      type: Sequelize.STRING,
    },
    priority: {
      type: Sequelize.STRING,
    },
    location_id: {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: {
        model: 'Locations',
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
  down: (queryInterface) => queryInterface.dropTable('Projects'),
};

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('server', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
        primaryKey: true,
        unique: true,
      },
      url: {
        type: Sequelize.STRING,
        primaryKey: true,
      },
      domain: {
        type: Sequelize.STRING,
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
    });
    await queryInterface.createTable('result_bundle', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
        primaryKey: true,
        unique: true,
      },
      server_id: {
        type: Sequelize.UUID,
        references: {
          model: 'server',
          key: 'id',
        },
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
    });
    await queryInterface.createTable('test_result', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
        primaryKey: true,
      },
      result_bundle_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'result_bundle',
          key: 'id',
        },
      },
      test: {
        type: Sequelize.STRING,
      },
      result: {
        type: Sequelize.JSON,
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
    });
  },

  down: async queryInterface => {
    await queryInterface.dropTable('test_result');
    await queryInterface.dropTable('result_bundle');
    await queryInterface.dropTable('server');
  },
};

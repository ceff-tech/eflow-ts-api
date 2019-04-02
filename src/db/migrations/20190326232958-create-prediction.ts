import * as Sequelize from 'sequelize';
import { QueryInterface } from 'sequelize';


module.exports = {
  up: (queryInterface: QueryInterface) => {
    return queryInterface.createTable('Predictions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      prediction: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      one: {
        type: Sequelize.ARRAY(Sequelize.DECIMAL(10, 2)), // eslint-disable-line
        allowNull: true,
      },
      two: {
        type: Sequelize.ARRAY(Sequelize.DECIMAL(10, 2)), // eslint-disable-line
        allowNull: true,
      },
      three: {
        type: Sequelize.ARRAY(Sequelize.DECIMAL(10, 2)), // eslint-disable-line
        allowNull: true,
      },
      four: {
        type: Sequelize.ARRAY(Sequelize.DECIMAL(10, 2)), // eslint-disable-line
        allowNull: true,
      },
      five: {
        type: Sequelize.ARRAY(Sequelize.DECIMAL(10, 2)), // eslint-disable-line
        allowNull: true,
      },
      six: {
        type: Sequelize.ARRAY(Sequelize.DECIMAL(10, 2)), // eslint-disable-line
        allowNull: true,
      },
      seven: {
        type: Sequelize.ARRAY(Sequelize.DECIMAL(10, 2)), // eslint-disable-line
        allowNull: true,
      },
      eight: {
        type: Sequelize.ARRAY(Sequelize.DECIMAL(10, 2)), // eslint-disable-line
        allowNull: true,
      },
      nine: {
        type: Sequelize.ARRAY(Sequelize.DECIMAL(10, 2)), // eslint-disable-line
        allowNull: true,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      tsUploadId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'TsUploads',
          key: 'id',
        },
      },
    });
  },

  down: (queryInterface: QueryInterface) => {
    return queryInterface.dropTable('Prediction');
  },
};

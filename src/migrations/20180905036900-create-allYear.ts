import * as Sequelize from 'sequelize';
import { QueryInterface } from 'sequelize';

module.exports = {
  up: (queryInterface: QueryInterface) => {
    return queryInterface.createTable('AllYears', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      average: {
        type: Sequelize.ARRAY(Sequelize.DECIMAL(10, 2)),
        allowNull: true,
      },
      standardDeviation: {
        type: Sequelize.ARRAY(Sequelize.DECIMAL(10, 2)),
        allowNull: true,
      },
      coeffientVariance: {
        type: Sequelize.ARRAY(Sequelize.DECIMAL(10, 2)),
        allowNull: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      gaugeId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'Gauges',
          key: 'id',
        },
      },
    });
  },
  down: (queryInterface: QueryInterface) => {
    return queryInterface.dropTable('AllYears');
  },
};

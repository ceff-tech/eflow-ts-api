import { Op } from 'sequelize';

interface IConfig {
  [index: string]: any;
}
export const config: IConfig = {
  development: {
    username: 'production',
    password: 'production123',
    database: 'eflow_production',
    host: '127.0.0.1',
    post: 5432,
    dialect: 'postgres',
    logging: false,
    pool: {
      max: 30,
      min: 0,
      idle: 1000000,
      acquire: 1000000,
    },
    operatorsAliases: Op,
  },
  stage: {
    username: 'production',
    password: 'production123',
    database: 'eflow_production',
    host: '127.0.0.1',
    post: 5432,
    dialect: 'postgres',
    logging: false,
    pool: {
      max: 30,
      min: 0,
      idle: 1000000,
      acquire: 1000000,
    },
    operatorsAliases: Op,
  },
  test: {
    username: 'postgres',
    password: null,
    database: 'eflow_ts_test',
    host: '127.0.0.1',
    dialect: 'postgres',
    operatorsAliases: false,
    logging: false,
    pool: {
      max: 30,
      min: 0,
      idle: 1000000,
      acquire: 1000000,
    },
  },
  production: {
    username: 'production',
    password: 'production123',
    database: 'eflow_production',
    host: '127.0.0.1',
    post: 5432,
    dialect: 'postgres',
    logging: false,
    pool: {
      max: 30,
      min: 0,
      idle: 1000000,
      acquire: 1000000,
    },
    operatorsAliases: Op,
  },
};

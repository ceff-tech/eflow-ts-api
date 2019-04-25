import { Op } from 'sequelize';

interface IConfig {
  [index: string]: any;
}
export const config: IConfig = {
  development: {
    username: 'postgres',
    password: null,
    database: 'eflow_development',
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
  stage: {
    username: 'postgres',
    password: null,
    database: 'eflow_ts_stage',
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

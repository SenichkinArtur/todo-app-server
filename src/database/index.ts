import dbConfig from '../config/db.config';
import * as Sequelize from 'sequelize';

export const sequelize = new Sequelize.Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
  host: dbConfig.host,
  database: dbConfig.database,
  username: dbConfig.username,
  dialect: dbConfig.dialect,
  port: dbConfig.port,
});

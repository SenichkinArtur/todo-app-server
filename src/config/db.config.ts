import { Dialect } from 'sequelize';

const dialect: Dialect = 'postgres';

export default {
  username: 'postgres',
  host: 'localhost',
  database: 'todo-db',
  password: 'password',
  dialect: dialect,
  port: 5432,
};

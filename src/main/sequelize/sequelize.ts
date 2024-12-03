import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite', // The SQLite database file
  logging: false, // Disable logging (optional)
});

export default sequelize;

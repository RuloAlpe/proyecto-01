import Sequelize from 'sequelize';
import config from '../config/config.dev';

const {
  dbUser, dbPass, dbHost, dbName, enviroment,
} = config;

const sequelizeOptions = {
  host: dbHost,
  dialect: 'mysql',
  logging: true,
  define: {
    underscored: false,
    timestamps: false,
  },
};

if (enviroment === 'production') {
  sequelizeOptions.logging = false;
}

module.exports = () => {
  const sequelize = new Sequelize(dbName, dbUser, dbPass, sequelizeOptions);
  sequelize
    .authenticate()
    .then(() => {
      console.log('Connection has been established successfully.');
    })
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    });
  global.sequelize = sequelize;
};


import { Model, Sequelize } from 'sequelize';

export default class Gender extends Model {}

Gender.init(
  {
    genderId: {
      type: Sequelize.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: Sequelize.STRING,
  },
  {
    sequelize,
  },
);

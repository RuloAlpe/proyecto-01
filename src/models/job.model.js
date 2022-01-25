import { Model, Sequelize } from 'sequelize';

export default class Job extends Model {}

Job.init(
  {
    jobId: {
      type: Sequelize.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: Sequelize.STRING,
    salary: Sequelize.INTEGER,
  },
  {
    sequelize,
  },
);

import { Model, Sequelize } from 'sequelize';
import Gender from './gender.model';
import Job from './job.model';

export default class Employee extends Model {}

Employee.init(
  {
    employeeId: {
      type: Sequelize.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    genderId: Sequelize.INTEGER,
    jobId: Sequelize.INTEGER,
    name: Sequelize.STRING,
    lastName: Sequelize.STRING,
    birthdate: Sequelize.DATEONLY,
  },
  {
    sequelize,
  },
);

Employee.hasOne(Gender, { foreignKey: 'genderId', sourceKey: 'genderId' });
Employee.hasOne(Job, { foreignKey: 'jobId', sourceKey: 'jobId' });

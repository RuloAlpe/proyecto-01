import { Model, Sequelize } from 'sequelize';
import Employee from './employee.model';

export default class Hour extends Model {}

Hour.init(
  {
    hoursId: {
      type: Sequelize.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    employeeId: Sequelize.INTEGER,
    workedHours: Sequelize.INTEGER,
    workeddate: Sequelize.DATEONLY,
  },
  {
    sequelize,
  },
);

Hour.hasMany(Employee, { foreignKey: 'employeeId', sourceKey: 'employeeId' });

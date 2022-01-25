import { Op } from 'sequelize'
import Employee from '../models/employees.model';
import Job from '../models/job.model';
import Gender from '../models/gender.model';

const createEmployee = (body) => {
  return new Promise(async (resolve, reject) => {
    try {
      const newEmployee = await Employee.create(body);

      return resolve(newEmployee.employeeId);
    } catch (error) {
      return reject(error);
    }
  });
};

const validateNameAndLastname = (body) => {
  return new Promise(async (resolve, reject) => {
    try {
      const employee = await Employee.findAll({
        where: {
          [Op.and]: [
            { name: body.name },
            { lastName: body.lastName }
          ],
        }
      });

      return resolve(employee);
    } catch (error) {
      return reject(error);
    }
  });
};

const findByJobId = (jobId) => {
  return new Promise(async (resolve, reject) => {
    try {
      // const employees = await Employee.findAll({
      //   where: {
      //     jobId,
      //   },
      //   include: [
      //     Job,
      //     Gender,
      //   ],
      // });

      const allEmployees = await Employee.findAll();

      /**
       * Filtar los empleados obtenidos en b) con el puesto recibido en a) ocupando
        expresiones lambda con filtro
       */
      const employees = allEmployees.map((employee) => {
        if (employee.jobId === jobId)
          return employee;
      });

      /**
       * De los empleados obtenidos en c) ordenarlos por appellido materno.
       */
      employees.sort((a, b) => {
        let fa = a.lastName.toLowerCase(),
            fb = b.lastName.toLowerCase();
    
        if (fa < fb) {
            return -1;
        }
        if (fa > fb) {
            return 1;
        }
        return 0;
    });

      return resolve(employees);
    } catch (error) {
      return reject(error);
    }
  });
};

const findByArrayEmployeeId = (idsArray) => {
  return new Promise(async (resolve, reject) => {
    try {
      const employees = await Employee.findAll({
        where: {
          employeeId: {[Op.in]: idsArray},
        },
        include: [
          Job,
          Gender,
        ],
      });

      return resolve(employees);
    } catch (error) {
      return reject(error);
    }
  });
};

export default {
  createEmployee,
  validateNameAndLastname,
  findByJobId,
  findByArrayEmployeeId,
}
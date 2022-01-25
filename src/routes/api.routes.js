import express from 'express';
import employeeController from '../controller/employee.controller';
import employeeMiddleware from '../middleware/employee.middleware';

const router = express.Router();

router.post('/', [
  employeeMiddleware.validateMas18,
  employeeMiddleware.validateNameAndLastname,
], async (req, res) => {
  try {
    const employeeId = await employeeController.createEmployee(req.body);

    return res.status(201).json({
      id: employeeId,
      success: true,
    });
  } catch (err) {
    return res.status(400).json({
      codigo: 400,
      mensaje: err.message,
    });

  }
});

router.post('/job', async (req, res) => {
  try {
    const id = req.body.job_id;
    const employees = await employeeController.findByJobId(id);

    return res.status(200).json({
      employees,
      success: true,
    });
  } catch (err) {
    return res.status(400).json({
      codigo: 400,
      mensaje: err.message,
    });

  }
});

router.post('/ids', async (req, res) => {
  try {
    const idsArray = req.body.employee_id;
    const employees = await employeeController.findByArrayEmployeeId(idsArray);

    return res.status(200).json({
      employees,
      success: true,
    });
  } catch (err) {
    return res.status(400).json({
      codigo: 400,
      mensaje: err.message,
    });

  }
});

export default router;

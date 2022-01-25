import employeeController from "../controller/employee.controller";

const middleware = {};

middleware.validateMas18 = async (req, res, next) => {
  try {
    const cumple = new Date(req.body.birthdate);
    const hoy = new Date();
    let edad = hoy.getFullYear() - cumple.getFullYear();
    const mes = hoy.getMonth() - cumple.getMonth();

    if (mes < 0 || (mes === 0 && hoy.getDate() < cumple.getDate())) {
      edad--;
    }

    if (edad > 18) {
      return next();
    }
    throw new Error();
  } catch (err) {
    return res.status(401).json({
      message: 'El empleado no es mayor de edad',
    });
  }
};

middleware.validateNameAndLastname = async (req, res, next) => {
  try {
    const employee = await employeeController.validateNameAndLastname(req.body);
    console.log(employee);
    console.log(employee.length);

    if (employee.length === 0) {
      return next();
    }
    throw new Error();
  } catch (err) {
    return res.status(401).json({
      message: 'El empleado ya esta registrado.',
    });
  }
};

export default middleware;
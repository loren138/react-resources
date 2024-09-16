const { Router } = require('express');

const employeeRoutes = Router();

const currentEmployeesOfTheMonth = ['ashley', 'loren'];

employeeRoutes.get('/isEmployeeOfTheMonth', (req, res) => {
  const name = req?.query?.name?.toLowerCase() || '';
  const result = currentEmployeesOfTheMonth.includes(name);
  res.json({ isEmployeeOfTheMonth: result });
});

module.exports = employeeRoutes;
const { Router } = require('express');

const authRoutes = require('./auth');
const itemRoutes = require('./items');
const orderRoutes = require('./orders');
const employeeRoutes = require('./employees');

const routes = Router();

routes.use('/api/auth', authRoutes);
routes.use('/api/items', itemRoutes);
routes.use('/api/orders', orderRoutes);
routes.use('/api/employees', employeeRoutes);

module.exports = routes;

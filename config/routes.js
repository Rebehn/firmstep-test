const router = require('express').Router();
const customersController = require('../controllers/customers');

router.route('/customers')
  .get(customersController.index)
  .post(customersController.create);

module.exports = router;

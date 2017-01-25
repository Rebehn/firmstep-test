const Customer = require('../models/customer');

function customersIndex(req, res) {
  Customer.find((err, customers) => {
    if(err) return res.status(500).json({ error: err });
    return res.json(customers);
  });
}

function customersCreate(req, res) {
  Customer.create(req.body, (err, customer) => {
    if(err) return res.status(400).json({ error: err });
    return res.json(customer);
  });
}

module.exports = {
  index: customersIndex,
  create: customersCreate
};

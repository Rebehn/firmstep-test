const mongoose = require('mongoose');

const customersSchema = new mongoose.Schema({
  type: { type: String },
  name: { type: String },
  service: { type: String }
}, {
  timestamps: true
});

module.exports = mongoose.model('Customer', customersSchema);

const mongoose = require('mongoose');

const customersSchema = new mongoose.Schema({
  type: { type: String },
  name: { type: String },
  service: {type: String},
  queued_at: {type: String}
});

module.exports = mongoose.model('Customer', customersSchema);

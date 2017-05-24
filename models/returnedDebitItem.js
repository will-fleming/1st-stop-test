const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RdiSchema = new Schema({
  ReturnedDebitItem: {
    type: Schema.Types.Mixed,
    required: true
  }
});

module.exports = mongoose.model('rdi', RdiSchema);
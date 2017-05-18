const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RawJsonSchema = new Schema({
  BACSDocument: {
    type: Schema.Types.Mixed,
    required: true
  }
});

module.exports = mongoose.model('rawJson', RawJsonSchema);
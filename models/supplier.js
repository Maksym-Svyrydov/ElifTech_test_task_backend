const { Schema, model } = require('mongoose');
const { handleMongooseError } = require('../helpers');
const supplierSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Set name for contact'],
    },
    logo: {
      type: String,
    },
    location: {
      type: String,
    },
  },
  { versionKey: false, timestamps: true }
);
supplierSchema.post('save', handleMongooseError);

const Suppliers = model('contact', supplierSchema);

module.exports = { Suppliers };

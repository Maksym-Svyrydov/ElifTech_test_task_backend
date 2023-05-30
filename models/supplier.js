const { Schema, model } = require('mongoose');
const { handleMongooseError } = require('../helpers');
const supplierSchema = new Schema(
  {
    name: {
      type: String,
    },
    logo: {
      type: String,
    },
    location: {
      type: String,
    },
    products: {
      type: Array,
    },
  },
  { versionKey: false, timestamps: true }
);
supplierSchema.post('save', handleMongooseError);

const Suppliers = model('suppliers', supplierSchema);

module.exports = { Suppliers };

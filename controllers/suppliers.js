const { Suppliers } = require('../models/supplier');

const { ctrlWrapper } = require('../helpers');

const getSuppliers = async (req, res) => {
  const result = await Suppliers.find();
  res.json(result);
};
module.exports = {
  getSuppliers: ctrlWrapper(getSuppliers),
};
